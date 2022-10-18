(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{464:function(s,t,e){"use strict";e.r(t);var a=e(54),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cross-spawn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-spawn"}},[s._v("#")]),s._v(" cross-spawn")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://npmjs.org/package/cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/cross-spawn.svg",alt:"NPM version"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://npmjs.org/package/cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/dm/cross-spawn.svg",alt:"Downloads"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://travis-ci.org/moxystudio/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/travis/moxystudio/node-cross-spawn/master.svg",alt:"Build Status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://ci.appveyor.com/project/satazor/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/appveyor/ci/satazor/node-cross-spawn/master.svg",alt:"Build status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/moxystudio/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/codecov/c/github/moxystudio/node-cross-spawn/master.svg",alt:"Coverage Status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://david-dm.org/moxystudio/node-cross-spawn",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/david/moxystudio/node-cross-spawn.svg",alt:"Dependency status"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://david-dm.org/moxystudio/node-cross-spawn?type=dev",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/david/dev/moxystudio/node-cross-spawn.svg",alt:"Dev Dependency status"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("A cross platform solution to node's spawn and spawnSync.")]),s._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),e("p",[s._v("Node.js version 8 and up:\n"),e("code",[s._v("$ npm install cross-spawn")])]),s._v(" "),e("p",[s._v("Node.js version 7 and under:\n"),e("code",[s._v("$ npm install cross-spawn@6")])]),s._v(" "),e("h2",{attrs:{id:"why"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[s._v("#")]),s._v(" Why")]),s._v(" "),e("p",[s._v("Node has issues when using spawn on Windows:")]),s._v(" "),e("ul",[e("li",[s._v("It ignores "),e("a",{attrs:{href:"https://github.com/joyent/node/issues/2318",target:"_blank",rel:"noopener noreferrer"}},[s._v("PATHEXT"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("It does not support "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"}},[s._v("shebangs"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("Has problems running commands with "),e("a",{attrs:{href:"https://github.com/nodejs/node/issues/7367",target:"_blank",rel:"noopener noreferrer"}},[s._v("spaces"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("Has problems running commands with posix relative paths (e.g.: "),e("code",[s._v("./my-folder/my-executable")]),s._v(")")]),s._v(" "),e("li",[s._v("Has an "),e("a",{attrs:{href:"https://github.com/moxystudio/node-cross-spawn/issues/82",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),e("OutboundLink")],1),s._v(" with command shims (files in "),e("code",[s._v("node_modules/.bin/")]),s._v("), where arguments with quotes and parenthesis would result in "),e("a",{attrs:{href:"https://github.com/moxystudio/node-cross-spawn/blob/e77b8f22a416db46b6196767bcd35601d7e11d54/test/index.test.js#L149",target:"_blank",rel:"noopener noreferrer"}},[s._v("invalid syntax error"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("No "),e("code",[s._v("options.shell")]),s._v(" support on node "),e("code",[s._v("<v4.8")])])]),s._v(" "),e("p",[s._v("All these issues are handled correctly by "),e("code",[s._v("cross-spawn")]),s._v(".\nThere are some known modules, such as "),e("a",{attrs:{href:"https://github.com/ForbesLindesay/win-spawn",target:"_blank",rel:"noopener noreferrer"}},[s._v("win-spawn"),e("OutboundLink")],1),s._v(", that try to solve this but they are either broken or provide faulty escaping of shell arguments.")]),s._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("Exactly the same way as node's "),e("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("spawn")]),e("OutboundLink")],1),s._v(" or "),e("a",{attrs:{href:"https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("spawnSync")]),e("OutboundLink")],1),s._v(", so it's a drop in replacement.")]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" spawn "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cross-spawn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Spawn NPM asynchronously")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" child "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("spawn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-depth'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdio"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inherit'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Spawn NPM synchronously")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" spawn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-g'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-depth'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stdio"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inherit'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"caveats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[s._v("#")]),s._v(" Caveats")]),s._v(" "),e("h3",{attrs:{id:"using-options-shell-as-an-alternative-to-cross-spawn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-options-shell-as-an-alternative-to-cross-spawn"}},[s._v("#")]),s._v(" Using "),e("code",[s._v("options.shell")]),s._v(" as an alternative to "),e("code",[s._v("cross-spawn")])]),s._v(" "),e("p",[s._v("Starting from node "),e("code",[s._v("v4.8")]),s._v(", "),e("code",[s._v("spawn")]),s._v(" has a "),e("code",[s._v("shell")]),s._v(" option that allows you run commands from within a shell. This new option solves\nthe "),e("a",{attrs:{href:"https://github.com/joyent/node/issues/2318",target:"_blank",rel:"noopener noreferrer"}},[s._v("PATHEXT"),e("OutboundLink")],1),s._v(" issue but:")]),s._v(" "),e("ul",[e("li",[s._v("It's not supported in node "),e("code",[s._v("<v4.8")])]),s._v(" "),e("li",[s._v("You must manually escape the command and arguments which is very error prone, specially when passing user input")]),s._v(" "),e("li",[s._v("There are a lot of other unresolved issues from the "),e("a",{attrs:{href:"#why"}},[s._v("Why")]),s._v(" section that you must take into account")])]),s._v(" "),e("p",[s._v("If you are using the "),e("code",[s._v("shell")]),s._v(" option to spawn a command in a cross platform way, consider using "),e("code",[s._v("cross-spawn")]),s._v(" instead. You have been warned.")]),s._v(" "),e("h3",{attrs:{id:"options-shell-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-shell-support"}},[s._v("#")]),s._v(" "),e("code",[s._v("options.shell")]),s._v(" support")]),s._v(" "),e("p",[s._v("While "),e("code",[s._v("cross-spawn")]),s._v(" adds support for "),e("code",[s._v("options.shell")]),s._v(" in node "),e("code",[s._v("<v4.8")]),s._v(", all of its enhancements are disabled.")]),s._v(" "),e("p",[s._v("This mimics the Node.js behavior. More specifically, the command and its arguments will not be automatically escaped nor shebang support will be offered. This is by design because if you are using "),e("code",[s._v("options.shell")]),s._v(" you are probably targeting a specific platform anyway and you don't want things to get into your way.")]),s._v(" "),e("h3",{attrs:{id:"shebangs-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shebangs-support"}},[s._v("#")]),s._v(" Shebangs support")]),s._v(" "),e("p",[s._v("While "),e("code",[s._v("cross-spawn")]),s._v(" handles shebangs on Windows, its support is limited. More specifically, it just supports "),e("code",[s._v("#!/usr/bin/env <program>")]),s._v(" where "),e("code",[s._v("<program>")]),s._v(" must not contain any arguments."),e("br"),s._v("\nIf you would like to have the shebang support improved, feel free to contribute via a pull-request.")]),s._v(" "),e("p",[s._v("Remember to always test your code on Windows!")]),s._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[s._v("#")]),s._v(" Tests")]),s._v(" "),e("p",[e("code",[s._v("$ npm test")]),e("br"),s._v(" "),e("code",[s._v("$ npm test -- --watch")]),s._v(" during development")]),s._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),e("p",[s._v("Released under the "),e("a",{attrs:{href:"https://www.opensource.org/licenses/mit-license.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("MIT License"),e("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);