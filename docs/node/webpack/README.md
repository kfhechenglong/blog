# webpack5 示例项目

## 初始化项目

使用npm init初始化项目配置

安装`webpack`依赖
```sh
npm install webpack --save-dev
npm install webpack-cli --save-dev
```
### 简单项目测试

分别在跟目录下创建`webpack.config.js`、`index.html`文件，进行`src`文件夹，并再其下创建`main.js`文件

#### 创建index.html文件内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webpack</title>
</head>
<body>
  webpack示例项目
  <button id="btn">按钮</button>
</body>
<script src="./build/bundle.js"></script>
</html>
```

#### 修改main.js文件

```js
document.querySelector('#btn').addEventListener('click', function() {
  console.log('我被点击了！')
}, false)
```

#### 配置webpack配置文件

```js
// webpack.config.js
const path = require('path')

module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 构建模式
  mode: 'development',
  output: {
    // 构建后的文件名称
    filename:'bundle.js',
    // 输入文件目录
    path: path.resolve(__dirname, './build')
  }
}

```

#### 测试项目配置

在package.json文件中创建启动脚本
```json
"scripts": {
  "start": "webpack --config webpack.config.js"
}
```

在命令行工具中使用`npm run start`启动webpack的编译程序，然后再浏览器中打开根目录下的index.html文件，点击页面中的按钮，控制台中输出`我被点击了！`，说明项目配置一切顺利正常。

## CSS处理

要处理CSS文件，我们需要先安装`style-loader` `css-loader`相关loader插件

在webpack.config.js中增加以下代码
```js
module: {
  rules: [
    {
      // 针对以.css后缀的文件
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }
  ]
}
```
在src文件夹下新增`style`文件夹，并创建`main.css`文件
```css
#btn {
  color: red;
}
```
在`main.js`中增加`import './style/main.css'`引入样式文件

重新执行`npm run start`命令重新编译文件，此时命令行中输出以下内容，说明编译成功

```sh
> webpack --config webpack.config.js

asset bundle.js 23.4 KiB [emitted] (name: main)
runtime modules 972 bytes 5 modules
cacheable modules 9.88 KiB
  modules by path ./node_modules/ 8.15 KiB
    modules by path ./node_modules/style-loader/dist/runtime/*.js 5.84 KiB
      ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 2.42 KiB [built] [code generated]
      ./node_modules/style-loader/dist/runtime/styleDomAPI.js 1.5 KiB [built] [code generated]
      ./node_modules/style-loader/dist/runtime/insertBySelector.js 1000 bytes [built] [code generated]
      + 3 modules
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.31 KiB
      ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
      ./node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated]
  modules by path ./src/ 1.72 KiB
    ./src/main.js 144 bytes [built] [code generated]
    ./src/style/main.css 1.13 KiB [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style/main.css 460 bytes [built] [code generated]
webpack 5.80.0 compiled successfully in 309 ms
```
重新打开`index.html`文件，发现按钮文本为红色

### 将css提出到单独的文件

这时需要使用`mini-css-extract-plugin`插件，使用npm安装插件

`npm install --save-dev mini-css-extract-plugin`

修改`webpack.config.js`，此时不需要使用style-loader，使用MiniCssExtractPlugin.loader替换
```js
// 新增代码
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        // 针对以.css后缀的文件
        test: /\.css$/,
        // 此时不需要使用style-loader，使用MiniCssExtractPlugin.loader替换
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      ...
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    })
  ]
}
```

重新执行`npm run start`命令重新编译文件，再次打开index.html文件，发现原来的样式不见了，这是因为目前的配置需要我们自己手动在index.html中引入刚才打包的css文件。

为了解决这个手动引入的繁琐工作，我们需要使用另外一个插件。

### 自动更新html文件的资源

终极神器[`HtmlWebpackPlugin`](https://github.com/jantimon/html-webpack-plugin#options)插件！！！

## 图片处理

图片可以使用内置的 [Asset](https://webpack.docschina.org/guides/asset-modules/) `Modules`来处理，在 `webpack 5` 之前，通常使用`file-loader`。

## 配置开发服务

需要安装`webpack-dev-server`，然后在`webpack.config.js`文件中新增如下代码：
```js
// 本地开发服务配置
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  }

```
然后需要在`package.json`中增加启动脚本`"serve": "webpack-dev-server"`，然后运行`npm run serve`本地即可启动一个端口为`9000`的服务，在浏览器中打开`http://localhost:9000/`就是现在开发的页面，同时也具有热更新的功能，每次修改完代码内容不再需要手动刷新浏览器页面。

## webapck性能优化

### 指定webpack处理文件的范围

在一个大型的开发项目中，我们会用到各种插件、库，在webpack处理这些插件、库的时候可以做有针对性的选择，对一些库文件进行限定，进而提示webpack性能问题；

#### loader的限定
在使用`loader`的时候，我们一般会使用test来配置要处理的文件的类型，但是我们可以使用`include`和`exclude`来现在要处理的文件范围；
```js
module.exports = {
  modules: {
    rules: [
      {
        // 针对以.css后缀的文件
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        // 仅仅处理src下面的css文件
        include: path.resolve(__dirname,'src')
      }
    ]
  }
}
```
#### 指定模块名后缀
如果文件中导入未添加拓展名的模块时，`webpack`会根据`resolve.extensions`配置的后缀规则去检查文件是否存在。因为`resolve.extensions`配置是一个数组，所以我们应当将正确的后缀名放到前面（`.js`、`.ts`），优先匹配，减少匹配次数。
```js
module.exports = {
  resolve: {
    // 优先匹配js文件->ts文件->json文件
    extensions: ['.js', '.ts', '.json']
  }
}
```
#### noParse配置
使用`module.noParse`配置可以告诉webpack忽略哪些模块，例如：如果项目中引用的jq，则可以将jq配置进去，因为webpack完全没必要解析这种没有模块系统的文件

```js
module.exports = {
  module: {
    noParse: ['/jQuery/']
  }
}
```

#### IgnorePlugin
该插件能够使得指定目录被忽略，从而使得打包变快，文件变小;
```js
module.exports = {
  plugins: [
    //moment这个库中，如果引用了./locale/目录的内容，就忽略掉，不会打包进去
    new webpack.IgnorePlugin(/\.\/locale/,/moment/)
  ]
}
```

### 使用[DllPlugin](https://webpack.docschina.org/plugins/dll-plugin/)

`DllPlugin` 和 `DllReferencePlugin` 用某种方法实现了拆分 `bundles`，同时还大幅度提升了构建的速度。`"DLL"`一词代表微软最初引入的动态链接库。一般需要将DLL配置成单独的构建文件，然后配合使用：
- 通过使用`webpack.DLLPlugin`插件打包出DLL库；
- 通过使用`webpack.DLLReferencePlugin`引用打包好的DLL库；

创建`webpack.vendor.config.js`文件
```js
const path = require('path');
module.exports = {
  // 此处省略入口和出口项配置
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: path.join(__dirname, 'dist' 'manifest.json'),
    });
  ]
}
```
创建修改`webpack.config.js`文件

```js
module.exports = {
  // 此处省略入口和出口项配置
  plugins: [
    new webpack.DllReferencePlugin({
      // 已打包好的清单文件路径
      manifest: path.join(__dirname, 'dist' 'manifest.json'),
    });
  ]
}
```
构建时，我们应该先构建`webpack.vendor.config.js`再构建`webpack.config.js`文件