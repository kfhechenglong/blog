(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{428:function(s,t,a){s.exports=a.p+"assets/img/vue-error.6c3b8bd2.png"},509:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"项目格式化工具配置"}},[s._v("项目格式化工具配置")]),s._v(" "),t("p",[s._v("必要的工具是提高开发效率，降低bug率，避免不必要低级错误的重要帮手之一。常见的"),t("code",[s._v("Formatter/Linter")]),s._v("工具一般包括"),t("code",[s._v("ESLint")]),s._v("、"),t("code",[s._v("Prettier")]),s._v("、"),t("code",[s._v("StyleLint")]),s._v("等，这里我们使用的编辑器是"),t("code",[s._v("VSCode")]),s._v("。")]),s._v(" "),t("p",[s._v("我们以一个"),t("code",[s._v("Vue3")]),s._v("、"),t("code",[s._v("Ts")]),s._v("、"),t("code",[s._v("Vite")]),s._v("的项目为例，并配以"),t("code",[s._v("ESLint")]),s._v("、"),t("code",[s._v("Prettier")]),s._v("、"),t("code",[s._v("StyleLint")]),s._v("、"),t("code",[s._v("Husky")]),s._v("、"),t("code",[s._v("Lint-Staged")]),s._v("、"),t("code",[s._v("Commitlint")]),s._v("相关插件，来规范代码质量，保证代码在风格上的一致性，git提交记录的一致性。")]),s._v(" "),t("p",[s._v("我们先在"),t("code",[s._v("VSCode")]),s._v("中安装相关插件：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ESLint")])]),s._v(" "),t("li",[t("code",[s._v("Prettier-Code formatter")])]),s._v(" "),t("li",[t("code",[s._v("StyleLint")]),s._v("\n另外为了支持"),t("code",[s._v("Vue")]),s._v("语法高亮、语法提示等，我们需要安装Vue3的插件，这里安装"),t("code",[s._v("Volar")]),s._v("。")])]),s._v(" "),t("p",[s._v("然后将插件配置在json文件中"),t("code",[s._v(".vscode/extensions.json")]),s._v("，后续别的开发人员打开这个项目时，"),t("code",[s._v("VSCode")]),s._v("就会推荐安装这些插件；")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"recommendations"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylelint.vscode-stylelint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"esbenp.prettier-vscode"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbaeumer.vscode-eslint"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vue.volar"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"配置eslint"}},[s._v("配置ESLint")]),s._v(" "),t("p",[s._v("使用pnpm安装eslint")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pnpm create @eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("接下来会让选择你想使用ESLint去做什么事？，这里我们选择第二个，检查语法并发现问题。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" How would you like to use ESLint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  To check syntax only\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" To check syntax and find problems\n  To check syntax"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" find problems"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" and enforce code style\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("接着又询问你的项目使用那种模块模式，这里我们选择第一个")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" What type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" modules does your project use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" JavaScript "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("modules")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CommonJS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("require"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("exports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  None "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" these\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("接下来是项目框架的选择，我们选择"),t("code",[s._v("Vue.js")]),s._v("。\n下面的选择就不再一一示例，最终的选项如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("√ How would you like to use ESLint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · problems\n√ What type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" modules does your project use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · esm\n√ Which framework does your project use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · vue\n√ Does your project use TypeScript"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · No "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Yes\n√ Where does your code run"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · browser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" node\n√ What format "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you want your config file to be "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" · JavaScript\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("当我们安装的时候，发现了一个报错")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Installing eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue@latest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @typescript"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin@latest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @typescript"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("parser@latest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" eslint@latest\n "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERR_PNPM_ADDING_TO_ROOT")]),s._v("  Running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" command will add the dependency to the workspace root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" which might not be what you want "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you really meant it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" make it explicit by running "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" command again "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" the "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("flag")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("workspace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" If you don't want to see "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" warning anymore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" you may "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" the ignore"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("workspace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check setting to "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这是因为使用"),t("code",[s._v("pnpm")]),s._v("安装时，需要带参数"),t("code",[s._v("-w")]),s._v("。\n重新安装一下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" create @eslint/config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装成功！生成的"),t("code",[s._v(".eslintrc.js")]),s._v("文件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"env"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"browser"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"es2021"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"extends"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint:recommended"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugin:vue/vue3-essential"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugin:@typescript-eslint/recommended"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"overrides"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"parser"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@typescript-eslint/parser"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"parserOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"ecmaVersion"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceType"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@typescript-eslint"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"rules"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("打开.vue文件发现，eslint报错，这是因为修改一下"),t("code",[s._v("parser: 'vue-eslint-parser'")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(428),alt:"vue文件报错"}})]),s._v(" "),t("h3",{attrs:{id:"补全一下安装的插件"}},[s._v("补全一下安装的插件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESLint核心库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESLint结合Vue代码规范")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-plugin-vue "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ESLint结合Airbnb代码规范(依赖plugin-import)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-config-airbnb-base eslint-plugin-import "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于ESLint默认使用Espree语法解析，是不能识别TypeScript某些语法，所以需安装@typescript-eslint/parser替换掉默认解析器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @typescript-eslint/parser "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 补充额外得typescript语法的规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @typescript-eslint/eslint-plugin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在import时可以使用@")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-import-resolver-alias "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决ts别名报错问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-import-resolver-typescript "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"eslint忽略文件"}},[s._v("eslint忽略文件")]),s._v(" "),t("p",[s._v("有一些文件，我们不需要进行"),t("code",[s._v("eslint")]),s._v("校验，例如打包好的"),t("code",[s._v("dist")]),s._v("文件夹、"),t("code",[s._v("node_modules")]),s._v("文件等等。")]),s._v(" "),t("p",[s._v("新建"),t("code",[s._v(".eslintignore")]),s._v("文件，并增加如下配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("node_modules/*\nindex.html\ndist/*\n/public/*\n/bin/*\n.husky/*\n.idea/*\n.vscode/*\n*.md\n*.woff\n*.ttf\n*.d.ts\n*.sh\n*.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("关于"),t("code",[s._v("ESLint")]),s._v("的配置基本就到此为止，目前项目中的代码很多都在报红，例如空格的缩进、单双引号、是否需要"),t("code",[s._v(";")]),s._v("分割符等，这些配置我们在后面和"),t("code",[s._v("Prettier")]),s._v("一起处理。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vite-plugin-eslint "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在"),t("code",[s._v("vite.config.ts")]),s._v("文件中增加下面配置")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" eslint "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vite-plugin-eslint'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://vitejs.dev/config/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eslint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);