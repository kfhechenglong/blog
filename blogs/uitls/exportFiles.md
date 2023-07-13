# 前端下载文件

前端通过接口下载后端文件一般用过`blob`形式

例如使用`axios`进行`http`请求下载
## axios下载
```js
axios.post('api/xxx/exportFiles', _data, {
  responseType: 'blob',
  needHeader: true
}).then((res) => {
  if (res.status === 200) {
    try {
      const { data, headers } = res
      const fileName = headers['content-disposition'] ? headers['content-disposition'].replace(/\w+;filename=(.*)/, '$1') : `aaa.xls`
      const blob = new Blob([data], { type: headers['content-type'] })
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.log(error.message || '解析导出文件错误')
    }
  } else {
    console.log(res.statusText || '导出错误')
  }
}).catch((err) => {
  console.log(err)
})
```
## 关于请求头

下载的文件名一般通过在响应头中`content-disposition`获取；

但是`content-disposition`需要在服务器端做适配，前端才能正常拿到其中的值，否则只能在浏览器端查看而获取不到，所以如果想要让客户端可以访问到其他的首部信息，服务器不仅要在heade里加入该首部，还要将它们在 Access-Control-Expose-Headers 里面列出来
参考：[Simple response header](https://developer.mozilla.org/zh-CN/docs/Glossary/Simple_response_header)