# Vue项目文件上传使用`ant-design-vue`上传到腾讯云

## `cos-js-sdk-v5`安装使用

首选安装`cos-js-sdk-v5`

```sh
npm install cos-js-sdk-v5
```

### 定义`Bucket`，`Region`

```js
// 桶地址
// config/index.js
export const bucket = {
  Bucket: 'bio-assay-你自己项目的',
  Region: '****你自己项目的****'
}
```

### 定义请求方法

我们在项目中封装了http请求的公共方法，同时为看安全起见，将腾讯云的关键信息存储在远程服务器，需要上传文件时，先调用请求获取关键参数。

```js
// 获取上传文件token
const getCosAuth =  function (params) {
    return new Promise((resolve, reject) => {
        Vue.req.get('api/****/****', { options}).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
```


### 取消请求

有时候我们需要取消正在上传的文件，则需要一个取消请求的方法
```js
// 请求的集合
export const promiseCancel = {
  cancel: []
}
// 取消请求方法
export const onCancel = (url, message = '') => {
  promiseCancel.cancel.forEach((item) => {
    if (item.url === url) {
      item.cancel && item.cancel(message || item.url)
      promiseCancel.cancel.splice(item, 1)
    }
  })
}
```

### 利用`MD5`生成桶的`key`值

为了保证文件上传的唯一性，我们将根据文件的内容生成唯一的key值

首先需要安装`spark-md5`

```sh
npm install spark-md5
```

```js
// getFileMD5.js
import SparkMD5 from 'spark-md5'

function getFileMD5 (file, callback) {
  const chunkSize = 1024 * 1024 * 2
  const chunks = Math.ceil(file.size / chunkSize)
  let currentChunk = 0
  const spark = new SparkMD5.ArrayBuffer()
  const fileReader = new FileReader()

  fileReader.onload = (e) => {
    spark.append(e.target.result)
    currentChunk++
    if (currentChunk < chunks) {
      loadNext()
    } else {
      callback(spark.end())
    }
  }

  function loadNext () {
    const start = currentChunk * chunkSize
    const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize
    fileReader.readAsArrayBuffer(file.slice(start, end))
  }

  loadNext()
}

export default getFileMD5

```
## 完善方法

现在我们来完善一下整体的方法

```js
// upload/index.js
import COS from 'cos-js-sdk-v5'
import getFileMD5 from './getFileMD5'
import { bucket } from './config/index'
import { onCancel } from './http/promiseCancel'
import Vue from 'vue'

export class UploadFile {
  constructor () {
    this.bucketName = bucket.Bucket
    // 监听文件上传的进度，默认是一个空函数
    this.onUploadProgress = () => {}
    // 桶的实例化
    this.cosObj = {}
    // 文件上传的id值
    this.cTaskId = ''
    // 请求token的唯一id值
    this.currentHttpId = ''
    // 取消请求的信息，此处可以忽略
    this.cancelMessage = 'needCancel'
  }

  // 获取上传文件token
  getCosAuth (params) {
    return new Promise((resolve, reject) => {
      Vue.req.get('api/**/**', { params: params, concelkey: this.currentHttpId }).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  cancelUpload (msg = 'needCancel') {
    this.cancelMessage = msg
    // 取消获取token
    onCancel(this.currentHttpId, this.cancelMessage)
    // 取消文件上传的请求
    this.cosObj.cancelTask && this.cosObj.cancelTask(this.cTaskId)
  }
  // 文件转成MD5

  fileToMD5 (file, resolve, reject) {
    // 获取文件的md5
    getFileMD5(file, (md5) => {
      const subFix = file.name.substr(file.name.lastIndexOf('.'))
      const key = md5 + subFix
    //   上传到腾讯云
      this.putObject(key, file, resolve, reject)
    })
  }

  // 开始上传文件
  startUpload (file, { progressFn } = {}) {
    // 文件上传的进度监听函数
    this.onUploadProgress = progressFn
    // 生成当前请求的唯一id值
    this.currentHttpId = 'http' + new Date().getTime() + Math.random()
    return new Promise((resolve, reject) => {
      this.getCosAuth({ bucketName: this.bucketName }).then((res) => {
        if (res.actionResult === '1') {
          if (!res.data || !res.data.Credentials) {
            reject(new Error('credentials invalid'))
          } else {
            const _data = res.data.Credentials
            const cosAuth = {
              TmpSecretId: _data.TmpSecretId,
              TmpSecretKey: _data.TmpSecretKey,
              XCosSecurityToken: _data.Token,
              StartTime: res.data.StartTime,
              ExpiredTime: res.data.ExpiredTime,
              ScopeLimit: true
            }
            const AUTH = 'getAuthorization'
            // 保存一下实例
            this.cosObj = new COS({
              [AUTH] (options, callback) {
                callback(cosAuth)
              }
            })
            // 生成md5
            this.fileToMD5(file, resolve, reject)
          }
        } else {
          reject(new Error(res.message))
        }
      }).catch((err) => {
        reject(err)
      })
    })
  }

  // 上传腾讯云
  putObject (key, file, resolve, reject) {
    this.cosObj.putObject({
      Bucket: bucket.Bucket,
      Region: bucket.Region,
      Key: key,
      Body: file,
      onProgress: progressData => {
        // 上传进度条的回调函数
        this.onUploadProgress && this.onUploadProgress(progressData)
      },
      onTaskReady: taskId => {
        this.cTaskId = taskId
      }
    }, (err, data) => {
      if (err) {
        reject(new Error(err.error.Code))
      } else {
        resolve(data)
      }
    })
    // 监听文件上传更新状态
    this.cosObj.on('list-update', (data) => {
      if (data && data.list && data.list[0].state === 'canceled') {
        const errMessage = { message: this.cancelMessage }
        reject(errMessage)
      }
    })
  }
}

```
以上就是整体的封装方法

## 组件中使用

现在需要定义一个公共的文件上传组件

改组件依赖了vue的`ant-design-vue`UI组件库

```html
<template>
  <div>
    <div v-show="isShowUploadBtn" v-if="showUpload" class="upload-warp">
      <a-upload
        name="file"
        ref="upload"
        :multiple="false"
        :disabled="disabled"
        :show-upload-list="false"
        :customRequest="customRequest"
        :accept="accept.join(',')"
        class="upload-list-inline"
        listType="picture">
        <a-button class="upload-btn">
          <my-icon type="iconupload"></my-icon> {{BtnName}}
        </a-button>
      </a-upload>
      <span class="ext-name" v-if="isShowExtNname">支持扩展名：{{ extNname }}</span>
    </div>
    <div v-if="isShowProgress" style="width:90%;" class="progress-warp">
      <p class="t-overflow"><a-icon type="paper-clip" /> {{currentFileName}}</p>
      <div class="progress">
        <a-progress
          :stroke-color="{
            '0%': '#2FC6A3',
            '100%': '#2FC6A3',
          }"
          :percent="percentValue"
        />
        <my-icon type="iconashbin" class="remove" title="点击终止上传" @click="cancelUploadHandler"></my-icon>
      </div>
    </div>
  </div>
</template>
```

``` js
  import { Upload, Icon, Progress } from 'ant-design-vue'
  import { UploadFile } from './index'
  export default {
    name: 'UploadFile',
    components: {
      [Icon.name]: Icon,
      [Progress.name]: Progress,
      [Upload.name]: Upload
    },
    props: {
      accept: {
        type: Array,
        required: false,
        default: () => ['.doc', '.docx']
      },
      disabled: {
        type: Boolean,
        default: false
      },
      files: {
        type: Array,
        default: () => []
      },
      listLenght: {
        type: Number,
        default: 10
      },
      BtnName: {
        type: String,
        default: '上传文件'
      },
      isShowUploadBtn: {
        type: Boolean,
        default: true
      },
      isShowExtNname: {
        type: Boolean,
        default: true
      },
      // 文件上传大小限制
      limtSize: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        percentValue: 0,
        currentFileName: '',
        isUploading: false,
        uploadInstance: {}
      }
    },
    computed: {
      showUpload () {
        // 如果是列表上传，则上传文件个数不大最大值，则显示上传按钮
        if (!this.isUploading && this.fileList.length < this.listLenght) {
          return true
        }
        if (!this.fileList.length === 0 && !this.isUploading) {
          return true
        }
        return false
      },
      isShowProgress () {
        return this.isUploading
      }
    },
    methods: {
      // 上传文件 返回腾讯云信息，通过事件将存储信息返回到父组件
      customRequest (info) {
        // console.log(info)
        const { file } = info
        // console.log("handleUpload",file)
        const size = (file.size / 1024 / 1024).toFixed(2)
        this.currentFileName = file.name
        const extName = this.getExtName(file.name)
        const { accept } = this
        this.isUploading = true
        if (accept.length && !accept.includes(`.${extName}`.toLowerCase())) {
          this.$message.error('文件格式错误')
          this.isUploading = false
          return
        }
        if (size > this.limtSize) {
          this.$message.error('上传文件不能大于' + this.limtSize + 'M')
          this.isUploading = false
          return
        }
        this.uploadInstance = new UploadFile()
        this.uploadInstance.startUpload(file, {
          progressFn: this.progress
        }).then(res => {
          if (res.statusCode === 200) {
            this.isUploading = false
            this.percentValue = 0
            this.$emit('fileList', {
              uid: file.uid,
              name: this.currentFileName,
              url: 'https://' + res.Location
            })
          }
        }).catch((err) => {
          this.percentValue = 0
          this.isUploading = false
          if (err && err.message === 'needCancel') {
            this.$message.warning('文件上传已取消！')
          } else {
            this.$message.warning(err.message || err || '上传异常！')
          }
        })
      },
      // 监听文件上传的进度
      progress (data) {
        this.percentValue = data.percent ? +(data.percent * 100).toFixed(2) : 0
      },
      cancelUploadHandler () {
        // 取消文件上传
        this.uploadInstance.cancelUpload && this.uploadInstance.cancelUpload()
      }
    }
}
```
以上代码仅显示了文件上传的关键逻辑，如果想拓展功能，可以自行添加代码
