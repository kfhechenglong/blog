(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{402:function(s,t,a){s.exports=a.p+"assets/img/js-flow.1f44a4d8.png"},467:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("作为一个前端开发者，你必须知道"),t("code",[s._v("JavaScript")]),s._v("程序内部是如何执行的，尤其是理解"),t("code",[s._v("JavaScript")]),s._v("的执行上下文和执行栈，这对后面理解"),t("code",[s._v("JavaScript")]),s._v("中的闭包、作用域链等等有着至关的作用；")])]),s._v(" "),t("h2",{attrs:{id:"什么是执行上下文"}},[s._v("什么是执行上下文")]),s._v(" "),t("p",[s._v("执行上下文：指当前执行环境中的变量、函数声明，参数（arguments），作用域链，this等信息。")]),s._v(" "),t("p",[s._v("简而言之，执行上下文是评估和执行 "),t("code",[s._v("JavaScript")]),s._v(" 代码的环境的抽象概念。每当 "),t("code",[s._v("Javascript")]),s._v(" 代码在运行的时候，它都是在执行上下文中运行。")]),s._v(" "),t("h2",{attrs:{id:"执行上下文的类型"}},[s._v("执行上下文的类型")]),s._v(" "),t("p",[t("code",[s._v("JavaScript")]),s._v("中有三种执行上下文类型。\n可以分为：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("全局执行上下文")]),s._v(" "),t("p",[s._v("全局执行上下文，在浏览器环境下一般指的是"),t("code",[s._v("window")]),s._v("，并且设置"),t("code",[s._v("this")]),s._v("的值会指向这个全局的上下文对象，一个程序中只有一个全局上下文。")])]),s._v(" "),t("li",[t("p",[s._v("函数执行上下文")]),s._v(" "),t("p",[s._v("函数被调用时，都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，并且该上下文都是在函数函数调用时创建的。")])]),s._v(" "),t("li",[t("p",[s._v("Eval 函数执行上下文")]),s._v(" "),t("p",[s._v("由于"),t("code",[s._v("Eval")]),s._v("函数一般很少使用，我们这里就不在讨论。")])])]),s._v(" "),t("p",[s._v("全局与函数执行上下文不同：")]),s._v(" "),t("ul",[t("li",[s._v("全局：在文件执行前创建；函数：在函数调用时创建；")]),s._v(" "),t("li",[s._v("全局：只创建一次；函数：调用几次创建几次；")]),s._v(" "),t("li",[s._v("将"),t("code",[s._v("window")]),s._v("作为全局对象；函数：创建参数对象"),t("code",[s._v("arguments")]),s._v("，"),t("code",[s._v("this")]),s._v("指向调用者；")])]),s._v(" "),t("h2",{attrs:{id:"上下文的执行栈"}},[s._v("上下文的执行栈")]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("JavaScript")]),s._v(" 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部。")]),s._v(" "),t("p",[s._v("执行栈会执行位与栈顶的函数，当位于栈顶的函数执行完毕后，就从栈顶弹出该函数（即出栈），然后继续执行下一个位于栈顶的函数，直至执行栈内的函数执行完毕。")]),s._v(" "),t("p",[s._v("理解如下示例代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("first")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first 函数上下文'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("second")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'再次进入 first 函数上下文'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("second")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'second 函数上下文'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("first")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'全局上下文'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// first 函数上下文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// second 函数上下文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 再次进入 first 函数上下文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局上下文")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("上述代码在浏览器引擎执行时")]),s._v(" "),t("p",[s._v("首选创建了一个全局执行上下文，并将全局执行上下文压入当前的执行栈中。")]),s._v(" "),t("p",[s._v("当程序执行遇到"),t("code",[s._v("first()")]),s._v("函数调用时，"),t("code",[s._v("JavaScript")]),s._v("引擎为该函数创建一个新的执行上下文并把它压入当前执行栈的顶部。")]),s._v(" "),t("p",[s._v("当从 "),t("code",[s._v("first()")]),s._v(" 函数内部调用 "),t("code",[s._v("second()")]),s._v(" 函数时，"),t("code",[s._v("JavaScript")]),s._v("引擎为 "),t("code",[s._v("second()")]),s._v(" 函数创建了一个新的执行上下文并把它压入当前执行栈的顶部。")]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("second()")]),s._v(" 函数执行完毕，它的执行上下文会从当前栈弹出，并且控制流程到达下一个执行上下文，即 "),t("code",[s._v("first()")]),s._v("函数的执行上下文。")]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("first()")]),s._v("执行完毕，它的执行上下文从栈弹出，控制流程到达全局执行上下文。")]),s._v(" "),t("p",[s._v("一旦所有代码执行完毕，"),t("code",[s._v("JavaScript")]),s._v("引擎从当前栈中移除全局执行上下文。")]),s._v(" "),t("h2",{attrs:{id:"创建上下文"}},[s._v("创建上下文")]),s._v(" "),t("p",[s._v("上下文的创建分为两个阶段：")]),s._v(" "),t("ul",[t("li",[s._v("创建阶段")]),s._v(" "),t("li",[s._v("执行阶段")])]),s._v(" "),t("h3",{attrs:{id:"创建阶段"}},[s._v("创建阶段")]),s._v(" "),t("p",[s._v("在JavaScript代码执行前，首选要经历上下文的创建阶段，在创建阶段主要发生以下三件事情：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("生成变量对象(变量环境)")])]),s._v(" "),t("li",[t("p",[s._v("建立作用域链(词法环境)")])]),s._v(" "),t("li",[t("p",[s._v("确定this的指向（即this绑定）")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("ExecutionContext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ThisBinding "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<this value>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  LexicalEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  VariableEnvironment "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"执行阶段"}},[s._v("执行阶段")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("变量赋值")])]),s._v(" "),t("li",[t("p",[s._v("函数的引用")])]),s._v(" "),t("li",[t("p",[s._v("执行其他代码")])])]),s._v(" "),t("h3",{attrs:{id:"代码示例理解"}},[s._v("代码示例理解")]),s._v(" "),t("p",[s._v("假如有如下代码：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'绝对零度'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("showMyInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" age\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("现在我们来看在创建阶段和执行阶段分别发生了什么。")]),s._v(" "),t("p",[s._v("首选看一下全局的上执行下文")]),s._v(" "),t("p",[t("img",{attrs:{src:a(402),alt:"JavaScript上下文创建"}})]),s._v(" "),t("p",[s._v("总体概况，在创建阶段JS引擎将会主要做以下几件事：")]),s._v(" "),t("ul",[t("li",[s._v("将"),t("code",[s._v("window")]),s._v("作为全局执行上下文对象")]),s._v(" "),t("li",[s._v("创建"),t("code",[s._v("this")]),s._v(","),t("code",[s._v("this")]),s._v("指向"),t("code",[s._v("window")])]),s._v(" "),t("li",[s._v("给变量和函数安排内存空间")]),s._v(" "),t("li",[s._v("变量赋值"),t("code",[s._v("undefined")]),s._v("，函数声明放入内存")]),s._v(" "),t("li",[s._v("放入作用域链")])]),s._v(" "),t("p",[s._v("在执行阶段则是对变量赋值，如果遇到函数调用，就执行函数，进而进入函数执行上下文的创建与执行阶段。")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("如果看完觉得有收获，欢迎点赞、评论、分享支持一下。你的支持和肯定，是我坚持写作的动力~")])]),s._v(" "),t("p",[s._v("最后可以关注我@笑果杂谈。欢迎[点此扫码加我微信]交流，共同进步~")])])}),[],!1,null,null,null);t.default=e.exports}}]);