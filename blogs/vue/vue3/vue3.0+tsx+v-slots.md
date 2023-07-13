# vue3.0 + tsx + ant-design-vue中使用插槽slot+自定义v-model

# 父组件中使用

``` tsx
export default defineComponent({
  name: "logoPage",
  components: {
    eleUpLogoTemplete,
    eleVisitingCardOne,
    eleVisitingCardTwo
  },
  render () {
    return (
      <div class="logo-page" v-draw-logo>
        <a-spin spinning={this.loading}>
          <div class="header">
            <h3>
              <span>LOGO</span>
              <a-tooltip overlayClassName="tooltip-class" color="#F2F5F8">
                <my-icon class="tip" icon-name="icon-tip"></my-icon>
              </a-tooltip>
            </h3>
            <p>*建议尺寸：高36px，宽不限；支持png格式，透明背景图</p>
          </div>
          <div class="logo-content">
            <ul>
              <li>
                <eleUpLogoTemplete v-model={this.urlType1} temp-name="模板一">
                  {
                    (logoUrl: string) => <eleVisitingCardOne logoUrl={logoUrl} userInfo={this.userInfo}></eleVisitingCardOne>
                  }
                </eleUpLogoTemplete>
              </li>
              <li>
                <eleUpLogoTemplete v-model={this.urlType2} temp-name="模板二">
                {
                  (logoUrl: string) => <eleVisitingCardTwo logoUrl={logoUrl} userInfo={this.userInfo}></eleVisitingCardTwo>
                }
                </eleUpLogoTemplete>
              </li>
            </ul>
          </div>
          <div class="save-btn" v-has={POSTER.LOGO_SAVE}>
            <a-button type="primary"  style="margin-left: 10px" onClick={() => this.saveHandler()}
            >保存</a-button>
          </div>
        </a-spin>
      </div>
    )
  }
})
```
`logoUrl`作为作用域插槽的参数抛出来，可以在父组件中使用

## 子组件实现

```tsx
export default defineComponent({
  name: "upLogoTemp",
  props: {
    tempName: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    }
  },
  // 定义v-model的值
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const accept = [".png", ".jpg", ".jpge"];
    const contractUrl = baseSaasURL() + "api/**/**";
    const isUploading = ref(false);
    const imgUrl: WritableComputedRef<string> = computed({
      get() {
        return props.modelValue
      },
      set(value) { 
        emit('update:modelValue', value)
      }
    });
    // 监听文件上传的进度
    const progress = (data: any) => {
      console.log(data.percent);
    };
    const handleChange = (fileInfo: any) => {
      const file = fileInfo.file;
      if (file.status === "done") {
        const res = file.response;
        isUploading.value = false;
        if (res.actionResult === "1") {
          imgUrl.value = res.data;
        } else {
          message.error(res.message, 2);
        }
      } else if (file.status === "uploading") {
        console.log("uploading");
        isUploading.value = true;
      }
    };
    // 拦截文件上传之前的逻辑
    const beforeUpload = (file: any): boolean => {
      const size = (file.size / 1024 / 1024).toFixed(2);
      const extName = getExtName(file.name);
      if (accept.length && !accept.includes(`.${extName}`.toLowerCase())) {
        message.error("文件格式错误");
        return false;
      }
      if (+size > 2) {
        message.error("文件大小不超过2M");
        return false;
      }
      return true
    };
    const removeHandler = () => {
      imgUrl.value = "";
    };
    // 自定义插槽内容，将插槽作为二级插槽传递给popover
    const soltCom = () => {
      return (
        <div style="width: 264px;height: 148px;">
          {slots.default && slots.default(imgUrl.value)}
        </div>
      );
    };
    return {
      soltCom,
      handleChange,
      beforeUpload,
      removeHandler,
      isUploading,
      contractUrl,
      accept,
      imgUrl,
      headers,
    };
  },
  render() {
    // 为popover定义插槽内容
    const slots = {
      content: () => this.soltCom(),
    };
    return (
      <div class="up-load-item">
        <span class="temp-name">{this.tempName}</span>
        <div class="up-load">
          <a-upload
            name="file"
            ref="upload"
            multiple={false}
            show-upload-list={false}
            action={this.contractUrl}
            onChange={this.handleChange}
            before-upload={this.beforeUpload}
            accept={this.accept.join(",")}
            headers={this.headers}
            listType="picture"
          >
            <div class="add-img-btn">
              {this.imgUrl ? (
                <div class="img-pic">
                  <img src={this.imgUrl} alt=""></img>
                </div>
              ) : (
                <my-icon
                  class="up-icon hover pointer"
                  icon-name="icon-xinzeng"
                  title="点击上传图片"
                ></my-icon>
              )}
            </div>
          </a-upload>
        </div>
        <div class="icon-gruop">
          <a-popover v-slots={slots} trigger="click" placement="right">
            <my-icon
              class="look-icon hover pointer action-item"
              icon-name="icon-looking"
              title="查看模板"
            ></my-icon>
          </a-popover>

          <my-icon
            class="delete-icon pointer action-item"
            icon-name="icon-delete"
            onClick={() => this.removeHandler()}
            title="点击删除logo"
          ></my-icon>
        </div>
      </div>
    );
  },
});
```