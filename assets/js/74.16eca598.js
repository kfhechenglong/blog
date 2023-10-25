(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{520:function(v,_,t){"use strict";t.r(_);var d=t(2),e=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"npm包版本号的理解"}},[v._v("npm包版本号的理解")]),v._v(" "),_("p",[v._v("npm包在发布时，需要按照"),_("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[v._v("包版本语义化"),_("OutboundLink")],1),v._v("中的约定去更新设置，例如我们常见的"),_("code",[v._v("1.0.0")]),v._v("，"),_("code",[v._v("1.0.1")]),v._v("，"),_("code",[v._v("0.0.1")]),v._v("等这样的版本号，那么这些数字分别代表什么意思呢？下面我们将详细介绍。")]),v._v(" "),_("h2",{attrs:{id:"npm版本号的组成"}},[v._v("npm版本号的组成")]),v._v(" "),_("p",[v._v("一个完整的版本号，由三部分组成：主版本号（major）、次版本号(minor)、修订版本号(patch)，简称"),_("code",[v._v("X.Y.Z")]),v._v("，具体含义：")]),v._v(" "),_("ul",[_("li",[v._v("主版本号（major）：项目（包）做了大量的变更，与旧的版本存在一定的不兼容性等问题。")]),v._v(" "),_("li",[v._v("次版本号（minor）：做了少量的变更或向下做了兼容。")]),v._v(" "),_("li",[v._v("修订版本号（patch）：修复上一个版本的bug或向下做兼容。")])]),v._v(" "),_("p",[v._v("版本号变更的一般规则：")]),v._v(" "),_("ul",[_("li",[v._v("版本号只升不降，不得在数字前面加0。例如不能是"),_("code",[v._v("1.01.0")]),v._v("，应该是"),_("code",[v._v("1.0.0")]),v._v("。")]),v._v(" "),_("li",[v._v("当主版本号升级时，次版本号和修订版本号需要归零。例如"),_("code",[v._v("1.1.1")]),v._v("->"),_("code",[v._v("2.0.0")]),v._v("。")]),v._v(" "),_("li",[v._v("当次版本号升级时，主版本号不变，修订版本号归零。例如"),_("code",[v._v("1.1.1")]),v._v("->"),_("code",[v._v("1.2.0")]),v._v("。")]),v._v(" "),_("li",[v._v("当修订版本号升级时，主版本和次版本号都不变。例如"),_("code",[v._v("1.1.1")]),v._v("->"),_("code",[v._v("1.1.2")]),v._v("。")]),v._v(" "),_("li",[v._v("一般第一个正式版本应为"),_("code",[v._v("1.0.0")]),v._v("。")]),v._v(" "),_("li",[v._v("处于开发测试阶段的版本一般为"),_("code",[v._v("0.y.z")]),v._v("，如果不发布，则默认为"),_("code",[v._v("0.0.0")]),v._v("，如果发布第一个测试版本则是"),_("code",[v._v("0.1.0")]),v._v("，如果修复第一个测试版本则是"),_("code",[v._v("0.1.1")]),v._v("，如果更新第二个测试版本则是"),_("code",[v._v("0.2.0")]),v._v("。")])]),v._v(" "),_("h2",{attrs:{id:"版本标识符-标签"}},[v._v("版本标识符（标签）")]),v._v(" "),_("p",[v._v("格式："),_("code",[v._v("Major.Minor.Patch-Identifier.1")]),v._v("，其中"),_("code",[v._v("Identifier")]),v._v("就是代表标识符，和版本号之间使用"),_("code",[v._v("-")]),v._v("隔离，后面则是当前标识符的版本版本号，每升级一次则+1")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("标识符")]),v._v(" "),_("th",[v._v("含义")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("demo")]),v._v(" "),_("td",[v._v("demo版本")]),v._v(" "),_("td",[v._v("用于验证问题的版本")])]),v._v(" "),_("tr",[_("td",[v._v("dev")]),v._v(" "),_("td",[v._v("开发版")]),v._v(" "),_("td",[v._v("多用于开发阶段，bug较多，功能不完善")])]),v._v(" "),_("tr",[_("td",[v._v("alpha")]),v._v(" "),_("td",[v._v("α版本")]),v._v(" "),_("td",[v._v("内部版本，测试用，代表当前可能有很大的变动")])]),v._v(" "),_("tr",[_("td",[v._v("beta")]),v._v(" "),_("td",[v._v("测试版本（β版本）")]),v._v(" "),_("td",[v._v("测试版本，代表版本已开始稳定，但是还有bug")])]),v._v(" "),_("tr",[_("td",[v._v("stable")]),v._v(" "),_("td",[v._v("稳定版本")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("latest")]),v._v(" "),_("td",[v._v("最新版本")]),v._v(" "),_("td",[v._v("安装时不知道版本号时的默认安装最新版本")])])])]),v._v(" "),_("p",[v._v("希望安装带标签的版本，必须明确指定标签或者版本号，否则安装的是最新的不带标签的版本。")]),v._v(" "),_("h2",{attrs:{id:"版本运算符"}},[v._v("版本运算符")]),v._v(" "),_("p",[v._v("版本运算符一般是指定一定范围的版本号，主要有"),_("code",[v._v("~")]),v._v("、"),_("code",[v._v("-")]),v._v("、"),_("code",[v._v("^")]),v._v("、"),_("code",[v._v("<")]),v._v("、"),_("code",[v._v(">")]),v._v("等。")]),v._v(" "),_("p",[_("code",[v._v("~")]),v._v(" 版本号只指定主版本号或者次版本号，例如：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("版本范围")]),v._v(" "),_("th",[v._v("匹配版本号")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("~2")]),v._v(" "),_("td",[v._v("2.Y 或者 2.0.0 ≤ V < 4.0.0")])]),v._v(" "),_("tr",[_("td",[v._v("~2.1")]),v._v(" "),_("td",[v._v("2.1.Z 或者 2.1.0 ≤ V < 2.2.0")])]),v._v(" "),_("tr",[_("td",[v._v("~2.1.1")]),v._v(" "),_("td",[v._v("2.1.1 ≤ V < 2.2.0")])])])]),v._v(" "),_("p",[_("code",[v._v("^")]),v._v(" 版本号\n匹配第一个非0版本号")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("版本范围")]),v._v(" "),_("th",[v._v("匹配版本号")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("^2.1.2")]),v._v(" "),_("td",[v._v("2.1.2 ≤ V < 3.0.0")])]),v._v(" "),_("tr",[_("td",[v._v("^0.1.2")]),v._v(" "),_("td",[v._v("0.1.2 ≤ V < 0.2.0")])]),v._v(" "),_("tr",[_("td",[v._v("^2.Y.Z")]),v._v(" "),_("td",[v._v("2.0.0 ≤ V < 3.0.0")])])])]),v._v(" "),_("p",[v._v("npm 安装包时，默认使用 ^ 匹配版本。")]),v._v(" "),_("p",[_("code",[v._v("~")]),v._v(" 与 "),_("code",[v._v("^")]),v._v(" 对比")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("版本范围")]),v._v(" "),_("th",[v._v("匹配版本号")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("~2.1.0")]),v._v(" "),_("td",[v._v("2.1.0 ≤ V < 2.2.0")]),v._v(" "),_("td",[v._v("主版本号和次版本号相同")])]),v._v(" "),_("tr",[_("td",[v._v("^2.1.0")]),v._v(" "),_("td",[v._v("2.1.0 ≤ V < 3.0.0")]),v._v(" "),_("td",[v._v("主版本号相同")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);