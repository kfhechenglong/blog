(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{531:function(t,e,s){"use strict";s.r(e);var a=s(54),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npm-run-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-path"}},[t._v("#")]),t._v(" npm-run-path")]),t._v(" "),s("blockquote",[s("p",[t._v("Get your "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"}},[t._v("PATH"),s("OutboundLink")],1),t._v(" prepended with locally installed binaries")])]),t._v(" "),s("p",[t._v("In "),s("a",{attrs:{href:"https://docs.npmjs.com/cli/run-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm run scripts"),s("OutboundLink")],1),t._v(" you can execute locally installed binaries by name. This enables the same outside npm.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" npm-run-path\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" childProcess "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node:child_process'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("npmRunPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" npmRunPathEnv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm-run-path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/usr/local/bin'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npmRunPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus/dev/foo/node_modules/.bin:/Users/sindresorhus/dev/node_modules/.bin:/Users/sindresorhus/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/bin'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `foo` is a locally installed binary")]),t._v("\nchildProcess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tenv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npmRunPathEnv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"npmrunpath-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npmrunpath-options"}},[t._v("#")]),t._v(" npmRunPath(options?)")]),t._v(" "),s("p",[t._v("Returns the augmented PATH string.")]),t._v(" "),s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("h5",{attrs:{id:"cwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cwd"}},[t._v("#")]),t._v(" cwd")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string | URL")]),s("br"),t._v("\nDefault: "),s("code",[t._v("process.cwd()")])]),t._v(" "),s("p",[t._v("The working directory.")]),t._v(" "),s("h5",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string")]),s("br"),t._v("\nDefault: "),s("a",{attrs:{href:"https://github.com/sindresorhus/path-key",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("PATH")]),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("The PATH to be appended.")]),t._v(" "),s("p",[t._v("Set it to an empty string to exclude the default PATH.")]),t._v(" "),s("h5",{attrs:{id:"execpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execpath"}},[t._v("#")]),t._v(" execPath")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string")]),s("br"),t._v("\nDefault: "),s("code",[t._v("process.execPath")])]),t._v(" "),s("p",[t._v("The path to the current Node.js executable. Its directory is pushed to the front of PATH.")]),t._v(" "),s("p",[t._v("This can be either an absolute path or a path relative to the "),s("a",{attrs:{href:"#cwd"}},[s("code",[t._v("cwd")]),t._v(" option")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"npmrunpathenv-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npmrunpathenv-options"}},[t._v("#")]),t._v(" npmRunPathEnv(options?)")]),t._v(" "),s("p",[t._v("Returns the augmented "),s("a",{attrs:{href:"https://nodejs.org/api/process.html#process_process_env",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("process.env")]),s("OutboundLink")],1),t._v(" object.")]),t._v(" "),s("h4",{attrs:{id:"options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[t._v("#")]),t._v(" options")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("h5",{attrs:{id:"cwd-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cwd-2"}},[t._v("#")]),t._v(" cwd")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string | URL")]),s("br"),t._v("\nDefault: "),s("code",[t._v("process.cwd()")])]),t._v(" "),s("p",[t._v("The working directory.")]),t._v(" "),s("h5",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("p",[t._v("Accepts an object of environment variables, like "),s("code",[t._v("process.env")]),t._v(", and modifies the PATH using the correct "),s("a",{attrs:{href:"https://github.com/sindresorhus/path-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("PATH key"),s("OutboundLink")],1),t._v(". Use this if you're modifying the PATH for use in the "),s("code",[t._v("child_process")]),t._v(" options.")]),t._v(" "),s("h5",{attrs:{id:"execpath-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execpath-2"}},[t._v("#")]),t._v(" execPath")]),t._v(" "),s("p",[t._v("Type: "),s("code",[t._v("string")]),s("br"),t._v("\nDefault: "),s("code",[t._v("process.execPath")])]),t._v(" "),s("p",[t._v("The path to the Node.js executable to use in child processes if that is different from the current one. Its directory is pushed to the front of PATH.")]),t._v(" "),s("p",[t._v("This can be either an absolute path or a path relative to the "),s("a",{attrs:{href:"#cwd"}},[s("code",[t._v("cwd")]),t._v(" option")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"related"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related"}},[t._v("#")]),t._v(" Related")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/sindresorhus/npm-run-path-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm-run-path-cli"),s("OutboundLink")],1),t._v(" - CLI for this module")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/sindresorhus/execa",target:"_blank",rel:"noopener noreferrer"}},[t._v("execa"),s("OutboundLink")],1),t._v(" - Execute a locally installed binary")])]),t._v(" "),s("hr"),t._v(" "),s("div",{attrs:{align:"center"}},[s("b",[s("a",{attrs:{href:"https://tidelift.com/subscription/pkg/npm-npm-run-path?utm_source=npm-npm-run-path&utm_medium=referral&utm_campaign=readme"}},[t._v("Get professional support for this package with a Tidelift subscription")])]),t._v(" "),s("br"),t._v(" "),s("sub",[t._v("\n\t\tTidelift helps make open source sustainable for maintainers while giving companies"),s("br"),t._v("assurances about security, maintenance, and licensing for their dependencies.\n\t")])])])}),[],!1,null,null,null);e.default=n.exports}}]);