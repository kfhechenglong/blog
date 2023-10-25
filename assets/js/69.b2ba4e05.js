(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{511:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("作为前端开发者，无论是否使用过"),s("code",[t._v("Vue")]),t._v("框架作为技术栈，都应该听过说虚拟"),s("code",[t._v("DOM")]),t._v("这个概念。")]),t._v(" "),s("p",[t._v("如果在面试的时候被面试官问："),s("code",[t._v("Vue")]),t._v("为什么要使用虚拟"),s("code",[t._v("DOM")]),t._v("？那么在回答这个问题之前我们应该先了解js操作"),s("code",[t._v("DOM")]),t._v("的方式和性能差异；")])]),t._v(" "),s("h2",{attrs:{id:"操作dom的方法和性能"}},[t._v("操作DOM的方法和性能")]),t._v(" "),s("p",[s("code",[t._v("JavaScript")]),t._v("操作"),s("code",[t._v("DOM")]),t._v("一般采用一下两种方式：")]),t._v(" "),s("ul",[s("li",[t._v("通过原生的"),s("code",[t._v("JavaScript")]),t._v("代码直接操作"),s("code",[t._v("DOM")]),t._v("；")]),t._v(" "),s("li",[t._v("通过html字符串拼接+innerHTML直接操作"),s("code",[t._v("DOM")]),t._v("；")])]),t._v(" "),s("h3",{attrs:{id:"原生操作"}},[t._v("原生操作")]),t._v(" "),s("p",[t._v("在我们前端开发者最初接触"),s("code",[t._v("JavaScript")]),t._v("时，都将学习如何使用原生js对"),s("code",[t._v("DOM")]),t._v("进行操作（增、删、改、查、事件绑定等等）。例如有如下代码")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("testEle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是div的文本内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改div的内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ele "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" documont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#testEle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用js-innerText修改dom文本"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\ndiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用js-textContent修改dom文本"')]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"innerhtml"}},[t._v("innerHtml")]),t._v(" "),s("p",[t._v("使用innerHTML方式")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>使用innerHTML</div>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\ndiv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHtml "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"虚拟dom"}},[t._v("虚拟DOM")]),t._v(" "),s("p",[t._v("这里先解释一下什么是虚拟DOM，其实虚拟DOM就是"),s("code",[t._v("一段用来描述真实的DOM的JavaScript代码（对象）并能根据一定的规则转换成真实的DOM节点")]),t._v("。")]),t._v(" "),s("p",[t._v("使用虚拟DOM操作html")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" virtualDOM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'使用虚拟DOM操作html'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render 函数将虚拟 DOM 创建为真实 DOM ，并将其插入到文档中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("virtualDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("以上便是三种操作DOM的方式，在写法上有些不同，下面重点分析一下性能问题；")]),t._v(" "),s("h2",{attrs:{id:"性能差异对比"}},[t._v("性能差异对比")]),t._v(" "),s("p",[t._v("首先有两个要点需要声明：")]),t._v(" "),s("ul",[s("li",[t._v("js的操作性能要远远大于dom的操作，他们两个不是一个量级；")]),t._v(" "),s("li",[t._v("js原生操作dom的方法应该除去innerHTML方法，因为innerHTML较为复杂；")])]),t._v(" "),s("h3",{attrs:{id:"最快的性能"}},[t._v("最快的性能")]),t._v(" "),s("p",[t._v("修改dom最直接的方式就是用原生的方法，也是最优的性能选择；")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用js-textContent修改dom文本"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("因为我们知道dom结构中哪个地方需要修改，要修改成什么内容，直接使用js操作dom就是最优的")]),t._v(" "),s("h3",{attrs:{id:"虚拟dom的性能"}},[t._v("虚拟DOM的性能")]),t._v(" "),s("p",[t._v("使用虚拟DOM的方式去操作DOM，其实就是找出来虚拟"),s("code",[t._v("DOM")]),t._v("前后的区别，然后更新一下，请看下面示例代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 原始的dom代码如下 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("虚拟DOM修改前"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 修改后的dom代码 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("虚拟DOM修改后"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这里需要说一下，虚拟"),s("code",[t._v("DOM")]),t._v("的底层还是使用的原生的js去操作的"),s("code",[t._v("DOM")]),t._v("，只不过我们对修改做了一层封装。所以虚拟"),s("code",[t._v("DOM")]),t._v("的性能要低于原生js操作"),s("code",[t._v("DOM")]),t._v("的方式；")]),t._v(" "),s("p",[t._v("这里我们可以得出的结论是：")]),t._v(" "),s("ul",[s("li",[t._v("原生js操作"),s("code",[t._v("DOM")]),t._v("的性能 = js操作"),s("code",[t._v("DOM")]),t._v("的性能；")]),t._v(" "),s("li",[t._v("虚拟"),s("code",[t._v("DOM")]),t._v("的性能 = js找出"),s("code",[t._v("DOM")]),t._v("前后差异的性能 + js操作"),s("code",[t._v("DOM")]),t._v("的性能；")])]),t._v(" "),s("p",[t._v("根据上面的公式可知，只有当"),s("code",[t._v("js找出DOM前后差异的性能")]),t._v("消耗为0时，两者的性能才会相等，但是永远不会超过"),s("code",[t._v("原生js操作DOM的性能")]),t._v("，所以我们在框架中使用算法去对比虚拟"),s("code",[t._v("DOM")]),t._v("的差异时，就是无限优化并使其的性能消耗降到最低（这也是后面为什么使用"),s("code",[t._v("diff")]),t._v("算法的起因）")]),t._v(" "),s("p",[t._v("至于为什么还要使用虚拟"),s("code",[t._v("DOM")]),t._v("，这个问题在文章的最后再说。")]),t._v(" "),s("h3",{attrs:{id:"innerhtml的性能"}},[t._v("innerHTML的性能")]),t._v(" "),s("p",[s("code",[t._v("innerHTML")]),t._v("不是简单的赋值，页面要想渲染出来html文档的内容，就先要将"),s("code",[t._v("innerHTML")]),t._v("的内容解析成"),s("code",[t._v("DOM")]),t._v("结构树，然后再插入到"),s("code",[t._v("DOM")]),t._v("文档结构中去，当然插入前需要先删除旧的文档结构。这里面有几个关键问题：")]),t._v(" "),s("ul",[s("li",[t._v("解析"),s("code",[t._v("DOM")]),t._v("结构树")]),t._v(" "),s("li",[t._v("删除原始"),s("code",[t._v("DOM")]),t._v("结构")]),t._v(" "),s("li",[t._v("创建新的"),s("code",[t._v("DOM")]),t._v("结构")])]),t._v(" "),s("p",[t._v("以上三个关键点其中"),s("code",[t._v("解析DOM结构树")]),t._v("是属于js级别的计算，另外后面两个则属于"),s("code",[t._v("DOM")]),t._v("级别的操作计算。")]),t._v(" "),s("h3",{attrs:{id:"三者对比"}},[t._v("三者对比")]),t._v(" "),s("p",[t._v("现在将三者的性能消耗进行一个对比分析：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作方式")]),t._v(" "),s("th",[t._v("JS级别")]),t._v(" "),s("th",[s("code",[t._v("DOM")]),t._v("级别")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("原生JS")]),t._v(" "),s("td",[t._v("纯JS运算")]),t._v(" "),s("td",[s("code",[t._v("DOM")]),t._v("运算")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("innerHTML")])]),t._v(" "),s("td",[t._v("纯JS运算html字符串"),s("code",[t._v("DOM")]),t._v("解析")]),t._v(" "),s("td",[s("code",[t._v("DOM")]),t._v("创建")])]),t._v(" "),s("tr",[s("td",[t._v("虚拟"),s("code",[t._v("DOM")])]),t._v(" "),s("td",[t._v("创建虚拟"),s("code",[t._v("DOM")])]),t._v(" "),s("td",[s("code",[t._v("DOM")]),t._v("创建")])])])]),t._v(" "),s("p",[t._v("上面表格对比了创建一个新的页面的性能消耗对比，先抛开原生JS的方式（因为该方式上文已经说了，是最优的）仅对比虚拟"),s("code",[t._v("DOM")]),t._v("和"),s("code",[t._v("innerHTML")]),t._v("的性能损耗差异；")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("innerHTML")]),t._v("的性能损耗 = js运算html字符串拼接性能损耗 + "),s("code",[t._v("DOM")]),t._v("创建的性能损耗；")]),t._v(" "),s("li",[t._v("虚拟"),s("code",[t._v("DOM")]),t._v("的性能损耗 = js创建虚拟"),s("code",[t._v("DOM")]),t._v("对象的性能损耗 + "),s("code",[t._v("DOM")]),t._v("创建的性能损耗；")])]),t._v(" "),s("p",[t._v("单从创建页面这个维度对比，两者貌似性能差异没有太大的区别；")]),t._v(" "),s("p",[t._v("下面我们从另外一个维度来进行对一下："),s("code",[t._v("更新维度")]),t._v("；")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("innerHTML")]),t._v("更新页面的过程是重新构建html字符串，再重新设置"),s("code",[t._v("DOM")]),t._v("元素的"),s("code",[t._v("innerHTM")]),t._v("属性，这其实是在说，哪怕我们只更改了一个文字，也要重新设置"),s("code",[t._v("innerHTML")]),t._v("属性。而重新设置"),s("code",[t._v("innerHTML")]),t._v("属性就等价于销毁所有旧的"),s("code",[t._v("DOM")]),t._v("元素，再全量创建新的"),s("code",[t._v("DOM")]),t._v("元素。")]),t._v(" "),s("p",[t._v("再来看虚拟"),s("code",[t._v("DOM")]),t._v("是如何更新页面的。它需要重新创建JavaScript对象（虚拟"),s("code",[t._v("DOM")]),t._v("），然后比较新旧虚拟"),s("code",[t._v("DOM")]),t._v("，找到变化的元素并更新它。")]),t._v(" "),s("p",[t._v("另外一个因素是和页面的代码体量有关系。对于"),s("code",[t._v("innerHTML")]),t._v("来说，页面大小越大，更新的时候性能消耗也就越大。而虚拟"),s("code",[t._v("DOM")]),t._v("紧紧需要更新变动的部分，这就与需要更新的数据量有关，而与页面大小没有关系。所以这个结论就是页面越大，"),s("code",[t._v("innerHTML")]),t._v("的性能消耗就越大，远远超过虚拟"),s("code",[t._v("DOM")]),t._v("的性能消耗。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作方式")]),t._v(" "),s("th",[t._v("JS级别")]),t._v(" "),s("th",[s("code",[t._v("DOM")]),t._v("级别")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("原生JS")]),t._v(" "),s("td",[t._v("纯JS运算")]),t._v(" "),s("td",[s("code",[t._v("DOM")]),t._v("运算")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("innerHTML")])]),t._v(" "),s("td",[t._v("纯JS运算html字符串"),s("code",[t._v("DOM")]),t._v("解析")]),t._v(" "),s("td",[t._v("销毁"),s("code",[t._v("DOM")]),t._v("+"),s("code",[t._v("DOM")]),t._v("创建，与页面大小有关")])]),t._v(" "),s("tr",[s("td",[t._v("虚拟"),s("code",[t._v("DOM")])]),t._v(" "),s("td",[t._v("创建虚拟"),s("code",[t._v("DOM")]),t._v("+Diff算法")]),t._v(" "),s("td",[t._v("变化部分的"),s("code",[t._v("DOM")]),t._v("更新，与更新的数据量有关")])])])]),t._v(" "),s("p",[t._v("根据上面的性能消耗分析对比可以知道：原生JS < 虚拟"),s("code",[t._v("DOM")]),t._v(" < "),s("code",[t._v("innerHTML")]),t._v("。那么既然如此为什么我们不使用原生JS呢，这就牵出另外一个重要的问题"),s("code",[t._v("可维护性")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"可维护性"}},[t._v("可维护性")]),t._v(" "),s("p",[t._v("原生的JS操作是性能最优的，但是在实践的业务项目开发中，我们很少使用原生的JS直接去开发，之前是使用"),s("code",[t._v("JQ")]),t._v("，现在是使用"),s("code",[t._v("Angular")]),t._v("、"),s("code",[t._v("Vue")]),t._v("、"),s("code",[t._v("React")]),t._v("等等。这主要是因为减少开发者的心智负担，方便快速开发与代码维护。")]),t._v(" "),s("h3",{attrs:{id:"命令式"}},[t._v("命令式")]),t._v(" "),s("p",[t._v("原生的JS代码一般都是命令式的，就是我想做什么操作，我就发出什么指令，关注的是过程。一个典型的命令式框架（库）是JQ，例如我想修改一个标签中的文本：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#divTag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改后的文案'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("命令式代码基本上就是一条条指令，在告诉程序我要干什么吗。如果我又想修改一下className呢？")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#divTag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add-class'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"声明式"}},[t._v("声明式")]),t._v(" "),s("p",[t._v("声明式更关注的是结果，我们不在乎实现的过程是什么，我们只需要告诉框架，我们想要的结果，然后帮我来实现就行。同样的代码我们使用声明式来实现一下。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("divTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("add-class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("修改后的文案"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("好了，这就实现了我们想要的结果，是不是可读性很好。至于他是如何实现的这个结果，我们一般并不需要关心，不过这里还是需要说明一下，"),s("code",[t._v("Vue")]),t._v("底层还是使用的命令式的代码帮我们做的封装，毕竟命令式的性能是最优的。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Vue")]),t._v("项目开发时，推荐使用模版语法，因为模版语法比直接使用虚拟"),s("code",[t._v("DOM")]),t._v("更加直观（虚拟"),s("code",[t._v("DOM")]),t._v("比模版语法更加灵活）。模版语法需要通过编译器转换成虚拟"),s("code",[t._v("DOM")]),t._v("，再使用渲染器渲染成真实的"),s("code",[t._v("DOM")]),t._v("节点，而虚拟"),s("code",[t._v("DOM")]),t._v("较传统的"),s("code",[t._v("innerHTML")]),t._v("最大的优势是数据更新节段，它紧紧更新变化的部分，性能消耗更小。")]),t._v(" "),s("p",[t._v("在权衡了性能消耗、代码的可维护性，"),s("code",[t._v("Vue")]),t._v("（包括"),s("code",[t._v("React")]),t._v("等）主流框架，使用了虚拟"),s("code",[t._v("DOM")]),t._v("这个概念。当然这也仅仅是其中的一部分使用的理由，因为还有响应式等等。。。")])])}),[],!1,null,null,null);s.default=e.exports}}]);