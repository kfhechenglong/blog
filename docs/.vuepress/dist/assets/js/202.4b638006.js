(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{620:function(e,t,r){"use strict";r.r(t);var a=r(54),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"safer-buffer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safer-buffer"}},[e._v("#")]),e._v(" safer-buffer "),r("a",{attrs:{href:"https://travis-ci.org/ChALkeR/safer-buffer",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://travis-ci.org/ChALkeR/safer-buffer.svg?branch=master",alt:"travis"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://npmjs.org/package/safer-buffer",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/safer-buffer.svg",alt:"npm"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://standardjs.com",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg",alt:"javascript style guide"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/Security-Responsible%20Disclosure-green.svg",alt:"Security Responsible Disclosure"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Modern Buffer API polyfill without footguns, working on Node.js from 0.8 to current.")]),e._v(" "),r("h2",{attrs:{id:"how-to-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use?")]),e._v(" "),r("p",[e._v("First, port all "),r("code",[e._v("Buffer()")]),e._v(" and "),r("code",[e._v("new Buffer()")]),e._v(" calls to "),r("code",[e._v("Buffer.alloc()")]),e._v(" and "),r("code",[e._v("Buffer.from()")]),e._v(" API.")]),e._v(" "),r("p",[e._v("Then, to achieve compatibility with outdated Node.js versions ("),r("code",[e._v("<4.5.0")]),e._v(" and 5.x "),r("code",[e._v("<5.9.0")]),e._v("), use\n"),r("code",[e._v("const Buffer = require('safer-buffer').Buffer")]),e._v(" in all files where you make calls to the new\nBuffer API. "),r("em",[e._v("Use "),r("code",[e._v("var")]),e._v(" instead of "),r("code",[e._v("const")]),e._v(" if you need that for your Node.js version range support.")])]),e._v(" "),r("p",[e._v("Also, see the\n"),r("a",{attrs:{href:"https://github.com/ChALkeR/safer-buffer/blob/master/Porting-Buffer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("porting Buffer"),r("OutboundLink")],1),e._v(" guide.")]),e._v(" "),r("h2",{attrs:{id:"do-i-need-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-it"}},[e._v("#")]),e._v(" Do I need it?")]),e._v(" "),r("p",[e._v("Hopefully, not — dropping support for outdated Node.js versions should be fine nowdays, and that\nis the recommended path forward. You "),r("em",[e._v("do")]),e._v(" need to port to the "),r("code",[e._v("Buffer.alloc()")]),e._v(" and "),r("code",[e._v("Buffer.from()")]),e._v("\nthough.")]),e._v(" "),r("p",[e._v("See the "),r("a",{attrs:{href:"https://github.com/ChALkeR/safer-buffer/blob/master/Porting-Buffer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("porting guide"),r("OutboundLink")],1),e._v("\nfor a better description.")]),e._v(" "),r("h2",{attrs:{id:"why-not-safe-buffer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-not-safe-buffer"}},[e._v("#")]),e._v(" Why not "),r("a",{attrs:{href:"https://npmjs.com/safe-buffer",target:"_blank",rel:"noopener noreferrer"}},[e._v("safe-buffer"),r("OutboundLink")],1),e._v("?")]),e._v(" "),r("p",[r("em",[e._v("In short: while "),r("code",[e._v("safe-buffer")]),e._v(" serves as a polyfill for the new API, it allows old API usage and\nitself contains footguns.")])]),e._v(" "),r("p",[r("code",[e._v("safe-buffer")]),e._v(" could be used safely to get the new API while still keeping support for older\nNode.js versions (like this module), but while analyzing ecosystem usage of the old Buffer API\nI found out that "),r("code",[e._v("safe-buffer")]),e._v(" is itself causing problems in some cases.")]),e._v(" "),r("p",[e._v("For example, consider the following snippet:")]),e._v(" "),r("div",{staticClass:"language-console extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cat example.unsafe.js\nconsole.log(Buffer(20))\n$ ./node-v6.13.0-linux-x64/bin/node example.unsafe.js\n<Buffer 0a 00 00 00 00 00 00 00 28 13 de 02 00 00 00 00 05 00 00 00>\n$ standard example.unsafe.js\nstandard: Use JavaScript Standard Style (https://standardjs.com)\n  /home/chalker/repo/safer-buffer/example.unsafe.js:2:13: 'Buffer()' was deprecated since v6. Use 'Buffer.alloc()' or 'Buffer.from()' (use 'https://www.npmjs.com/package/safe-buffer' for '<4.5.0') instead.\n")])])]),r("p",[e._v("This is allocates and writes to console an uninitialized chunk of memory.\n"),r("a",{attrs:{href:"https://www.npmjs.com/package/standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard"),r("OutboundLink")],1),e._v(" linter (among others) catch that and warn people\nto avoid using unsafe API.")]),e._v(" "),r("p",[e._v("Let's now throw in "),r("code",[e._v("safe-buffer")]),e._v("!")]),e._v(" "),r("div",{staticClass:"language-console extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ cat example.safe-buffer.js\nconst Buffer = require('safe-buffer').Buffer\nconsole.log(Buffer(20))\n$ standard example.safe-buffer.js\n$ ./node-v6.13.0-linux-x64/bin/node example.safe-buffer.js\n<Buffer 08 00 00 00 00 00 00 00 28 58 01 82 fe 7f 00 00 00 00 00 00>\n")])])]),r("p",[e._v("See the problem? Adding in "),r("code",[e._v("safe-buffer")]),e._v(" "),r("em",[e._v("magically removes the lint warning")]),e._v(", but the behavior\nremains identiсal to what we had before, and when launched on Node.js 6.x LTS — this dumps out\nchunks of uninitialized memory.\n"),r("em",[e._v("And this code will still emit runtime warnings on Node.js 10.x and above.")])]),e._v(" "),r("p",[e._v("That was done by design. I first considered changing "),r("code",[e._v("safe-buffer")]),e._v(", prohibiting old API usage or\nemitting warnings on it, but that significantly diverges from "),r("code",[e._v("safe-buffer")]),e._v(" design. After some\ndiscussion, it was decided to move my approach into a separate package, and "),r("em",[e._v("this is that separate\npackage")]),e._v(".")]),e._v(" "),r("p",[e._v("This footgun is not imaginary — I observed top-downloaded packages doing that kind of thing,\n«fixing» the lint warning by blindly including "),r("code",[e._v("safe-buffer")]),e._v(" without any actual changes.")]),e._v(" "),r("p",[e._v("Also in some cases, even if the API "),r("em",[e._v("was")]),e._v(" migrated to use of safe Buffer API — a random pull request\ncan bring unsafe Buffer API usage back to the codebase by adding new calls — and that could go\nunnoticed even if you have a linter prohibiting that (becase of the reason stated above), and even\npass CI. "),r("em",[e._v("I also observed that being done in popular packages.")])]),e._v(" "),r("p",[e._v("Some examples:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/webdriverio/webdriverio/commit/05cbd3167c12e4930f09ef7cf93b127ba4effae4#diff-124380949022817b90b622871837d56cR31",target:"_blank",rel:"noopener noreferrer"}},[e._v("webdriverio"),r("OutboundLink")],1),e._v("\n(a module with 548 759 downloads/month),")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/maxogden/websocket-stream/commit/c9312bd24d08271687d76da0fe3c83493871cf61",target:"_blank",rel:"noopener noreferrer"}},[e._v("websocket-stream"),r("OutboundLink")],1),e._v("\n(218 288 d/m, fix in "),r("a",{attrs:{href:"https://github.com/maxogden/websocket-stream/pull/142",target:"_blank",rel:"noopener noreferrer"}},[e._v("maxogden/websocket-stream#142"),r("OutboundLink")],1),e._v("),")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/node-serialport/node-serialport/commit/e8d9d2b16c664224920ce1c895199b1ce2def48c",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-serialport"),r("OutboundLink")],1),e._v("\n(113 138 d/m, fix in "),r("a",{attrs:{href:"https://github.com/node-serialport/node-serialport/pull/1510",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-serialport/node-serialport#1510"),r("OutboundLink")],1),e._v("),")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/karma-runner/karma/commit/3d94b8cf18c695104ca195334dc75ff054c74eec",target:"_blank",rel:"noopener noreferrer"}},[e._v("karma"),r("OutboundLink")],1),e._v("\n(3 973 193 d/m, fix in "),r("a",{attrs:{href:"https://github.com/karma-runner/karma/pull/2947",target:"_blank",rel:"noopener noreferrer"}},[e._v("karma-runner/karma#2947"),r("OutboundLink")],1),e._v("),")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/spdy-http2/spdy-transport/commit/5375ac33f4a62a4f65bcfc2827447d42a5dbe8b1",target:"_blank",rel:"noopener noreferrer"}},[e._v("spdy-transport"),r("OutboundLink")],1),e._v("\n(5 970 727 d/m, fix in "),r("a",{attrs:{href:"https://github.com/spdy-http2/spdy-transport/pull/53",target:"_blank",rel:"noopener noreferrer"}},[e._v("spdy-http2/spdy-transport#53"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("li",[e._v("And there are a lot more over the ecosystem.")])]),e._v(" "),r("p",[e._v("I filed a PR at\n"),r("a",{attrs:{href:"https://github.com/mysticatea/eslint-plugin-node/pull/110",target:"_blank",rel:"noopener noreferrer"}},[e._v("mysticatea/eslint-plugin-node#110"),r("OutboundLink")],1),e._v(" to\npartially fix that (for cases when that lint rule is used), but it is a semver-major change for\nlinter rules and presets, so it would take significant time for that to reach actual setups.\n"),r("em",[e._v("It also hasn't been released yet (2018-03-20).")])]),e._v(" "),r("p",[e._v("Also, "),r("code",[e._v("safer-buffer")]),e._v(" discourages the usage of "),r("code",[e._v(".allocUnsafe()")]),e._v(", which is often done by a mistake.\nIt still supports it with an explicit concern barier, by placing it under\n"),r("code",[e._v("require('safer-buffer/dangereous')")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"but-isn-t-throwing-bad"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#but-isn-t-throwing-bad"}},[e._v("#")]),e._v(" But isn't throwing bad?")]),e._v(" "),r("p",[e._v("Not really. It's an error that could be noticed and fixed early, instead of causing havoc later like\nunguarded "),r("code",[e._v("new Buffer()")]),e._v(" calls that end up receiving user input can do.")]),e._v(" "),r("p",[e._v("This package affects only the files where "),r("code",[e._v("var Buffer = require('safer-buffer').Buffer")]),e._v(" was done, so\nit is really simple to keep track of things and make sure that you don't mix old API usage with that.\nAlso, CI should hint anything that you might have missed.")]),e._v(" "),r("p",[e._v("New commits, if tested, won't land new usage of unsafe Buffer API this way.\n"),r("em",[e._v("Node.js 10.x also deals with that by printing a runtime depecation warning.")])]),e._v(" "),r("h3",{attrs:{id:"would-it-affect-third-party-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#would-it-affect-third-party-modules"}},[e._v("#")]),e._v(" Would it affect third-party modules?")]),e._v(" "),r("p",[e._v("No, unless you explicitly do an awful thing like monkey-patching or overriding the built-in "),r("code",[e._v("Buffer")]),e._v(".\nDon't do that.")]),e._v(" "),r("h3",{attrs:{id:"but-i-don-t-want-throwing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#but-i-don-t-want-throwing"}},[e._v("#")]),e._v(" But I don't want throwing…")]),e._v(" "),r("p",[e._v("That is also fine!")]),e._v(" "),r("p",[e._v("Also, it could be better in some cases when you don't comprehensive enough test coverage.")]),e._v(" "),r("p",[e._v("In that case — just don't override "),r("code",[e._v("Buffer")]),e._v(" and use\n"),r("code",[e._v("var SaferBuffer = require('safer-buffer').Buffer")]),e._v(" instead.")]),e._v(" "),r("p",[e._v("That way, everything using "),r("code",[e._v("Buffer")]),e._v(" natively would still work, but there would be two drawbacks:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Buffer.from")]),e._v("/"),r("code",[e._v("Buffer.alloc")]),e._v(" won't be polyfilled — use "),r("code",[e._v("SaferBuffer.from")]),e._v(" and\n"),r("code",[e._v("SaferBuffer.alloc")]),e._v(" instead.")]),e._v(" "),r("li",[e._v("You are still open to accidentally using the insecure deprecated API — use a linter to catch that.")])]),e._v(" "),r("p",[e._v("Note that using a linter to catch accidential "),r("code",[e._v("Buffer")]),e._v(" constructor usage in this case is strongly\nrecommended. "),r("code",[e._v("Buffer")]),e._v(" is not overriden in this usecase, so linters won't get confused.")]),e._v(" "),r("h2",{attrs:{id:"«without-footguns»"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#«without-footguns»"}},[e._v("#")]),e._v(" «Without footguns»?")]),e._v(" "),r("p",[e._v("Well, it is still possible to do "),r("em",[e._v("some")]),e._v(" things with "),r("code",[e._v("Buffer")]),e._v(" API, e.g. accessing "),r("code",[e._v(".buffer")]),e._v(" property\non older versions and duping things from there. You shouldn't do that in your code, probabably.")]),e._v(" "),r("p",[e._v("The intention is to remove the most significant footguns that affect lots of packages in the\necosystem, and to do it in the proper way.")]),e._v(" "),r("p",[e._v("Also, this package doesn't protect against security issues affecting some Node.js versions, so for\nusage in your own production code, it is still recommended to update to a Node.js version\n"),r("a",{attrs:{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"noopener noreferrer"}},[e._v("supported by upstream"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);