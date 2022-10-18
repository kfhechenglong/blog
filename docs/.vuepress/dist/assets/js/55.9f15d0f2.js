(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{475:function(t,a,e){"use strict";e.r(a);var s=e(54),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"minimatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch"}},[t._v("#")]),t._v(" minimatch")]),t._v(" "),e("p",[t._v("A minimal matching utility.")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://travis-ci.org/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/isaacs/minimatch.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("This is the matching library used internally by npm.")]),t._v(" "),e("p",[t._v("It works by converting glob expressions into JavaScript "),e("code",[t._v("RegExp")]),t._v("\nobjects.")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" minimatch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minimatch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.bar"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.foo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.+(bar|foo)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" debug"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true, and noisy!")]),t._v("\n")])])]),e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),e("p",[t._v("Supports these glob features:")]),t._v(" "),e("ul",[e("li",[t._v("Brace Expansion")]),t._v(" "),e("li",[t._v("Extended glob matching")]),t._v(" "),e("li",[t._v('"Globstar" '),e("code",[t._v("**")]),t._v(" matching")])]),t._v(" "),e("p",[t._v("See:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("man sh")])]),t._v(" "),e("li",[e("code",[t._v("man bash")])]),t._v(" "),e("li",[e("code",[t._v("man 3 fnmatch")])]),t._v(" "),e("li",[e("code",[t._v("man 5 gitignore")])])]),t._v(" "),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("p",[e("strong",[t._v("Please only use forward-slashes in glob expressions.")])]),t._v(" "),e("p",[t._v("Though windows uses either "),e("code",[t._v("/")]),t._v(" or "),e("code",[t._v("\\")]),t._v(" as its path separator, only "),e("code",[t._v("/")]),t._v("\ncharacters are used by this glob implementation.  You must use\nforward-slashes "),e("strong",[t._v("only")]),t._v(" in glob expressions.  Back-slashes in patterns\nwill always be interpreted as escape characters, not path separators.")]),t._v(" "),e("p",[t._v("Note that "),e("code",[t._v("\\")]),t._v(" or "),e("code",[t._v("/")]),t._v(" "),e("em",[t._v("will")]),t._v(" be interpreted as path separators in paths on\nWindows, and will match against "),e("code",[t._v("/")]),t._v(" in glob expressions.")]),t._v(" "),e("p",[t._v("So just always use "),e("code",[t._v("/")]),t._v(" in patterns.")]),t._v(" "),e("h2",{attrs:{id:"minimatch-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch-class"}},[t._v("#")]),t._v(" Minimatch Class")]),t._v(" "),e("p",[t._v("Create a minimatch object by instantiating the "),e("code",[t._v("minimatch.Minimatch")]),t._v(" class.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Minimatch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minimatch"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minimatch\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mm "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("pattern")]),t._v(" The original pattern the minimatch object represents.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("options")]),t._v(" The options supplied to the constructor.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("set")]),t._v(" A 2-dimensional array of regexp or string expressions.\nEach row in the\narray corresponds to a brace-expanded pattern.  Each item in the row\ncorresponds to a single path-part.  For example, the pattern\n"),e("code",[t._v("{a,b/c}/d")]),t._v(" would expand to a set of patterns like:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  [ [ a, d ]\n  , [ b, c, d ] ]\n")])])]),e("p",[t._v("If a portion of the pattern doesn't have any \"magic\" in it\n(that is, it's something like "),e("code",[t._v('"foo"')]),t._v(" rather than "),e("code",[t._v("fo*o?")]),t._v("), then it\nwill be left as a string rather than converted to a regular\nexpression.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("regexp")]),t._v(" Created by the "),e("code",[t._v("makeRe")]),t._v(" method.  A single regular expression\nexpressing the entire pattern.  This is useful in cases where you wish\nto use the pattern somewhat like "),e("code",[t._v("fnmatch(3)")]),t._v(" with "),e("code",[t._v("FNM_PATH")]),t._v(" enabled.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("negate")]),t._v(" True if the pattern is negated.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("comment")]),t._v(" True if the pattern is a comment.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("empty")]),t._v(" True if the pattern is "),e("code",[t._v('""')]),t._v(".")])])]),t._v(" "),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("makeRe")]),t._v(" Generate the "),e("code",[t._v("regexp")]),t._v(" member if necessary, and return it.\nWill return "),e("code",[t._v("false")]),t._v(" if the pattern is invalid.")]),t._v(" "),e("li",[e("code",[t._v("match(fname)")]),t._v(" Return true if the filename matches the pattern, or\nfalse otherwise.")]),t._v(" "),e("li",[e("code",[t._v("matchOne(fileArray, patternArray, partial)")]),t._v(" Take a "),e("code",[t._v("/")]),t._v("-split\nfilename, and match it against a single row in the "),e("code",[t._v("regExpSet")]),t._v(".  This\nmethod is mainly for internal use, but is exposed so that it can be\nused by a glob-walker that needs to avoid excessive filesystem calls.")])]),t._v(" "),e("p",[t._v("All other methods are internal, and will be called as necessary.")]),t._v(" "),e("h3",{attrs:{id:"minimatch-path-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch-path-pattern-options"}},[t._v("#")]),t._v(" minimatch(path, pattern, options)")]),t._v(" "),e("p",[t._v("Main export.  Tests a path against the pattern using the options.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isJS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matchBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"minimatch-filter-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch-filter-pattern-options"}},[t._v("#")]),t._v(" minimatch.filter(pattern, options)")]),t._v(" "),e("p",[t._v("Returns a function that tests its\nsupplied argument, suitable for use with "),e("code",[t._v("Array.filter")]),t._v(".  Example:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" javascripts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("matchBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"minimatch-match-list-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch-match-list-pattern-options"}},[t._v("#")]),t._v(" minimatch.match(list, pattern, options)")]),t._v(" "),e("p",[t._v("Match against the list of\nfiles, in the style of fnmatch or glob.  If nothing is matched, and\noptions.nonull is set, then return a list containing the pattern itself.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" javascripts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" minimatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("matchBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"minimatch-makere-pattern-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimatch-makere-pattern-options"}},[t._v("#")]),t._v(" minimatch.makeRe(pattern, options)")]),t._v(" "),e("p",[t._v("Make a regular expression object from the pattern.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("All options are "),e("code",[t._v("false")]),t._v(" by default.")]),t._v(" "),e("h3",{attrs:{id:"debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" debug")]),t._v(" "),e("p",[t._v("Dump a ton of stuff to stderr.")]),t._v(" "),e("h3",{attrs:{id:"nobrace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nobrace"}},[t._v("#")]),t._v(" nobrace")]),t._v(" "),e("p",[t._v("Do not expand "),e("code",[t._v("{a,b}")]),t._v(" and "),e("code",[t._v("{1..3}")]),t._v(" brace sets.")]),t._v(" "),e("h3",{attrs:{id:"noglobstar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#noglobstar"}},[t._v("#")]),t._v(" noglobstar")]),t._v(" "),e("p",[t._v("Disable "),e("code",[t._v("**")]),t._v(" matching against multiple folder names.")]),t._v(" "),e("h3",{attrs:{id:"dot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dot"}},[t._v("#")]),t._v(" dot")]),t._v(" "),e("p",[t._v("Allow patterns to match filenames starting with a period, even if\nthe pattern does not explicitly have a period in that spot.")]),t._v(" "),e("p",[t._v("Note that by default, "),e("code",[t._v("a/**/b")]),t._v(" will "),e("strong",[t._v("not")]),t._v(" match "),e("code",[t._v("a/.d/b")]),t._v(", unless "),e("code",[t._v("dot")]),t._v("\nis set.")]),t._v(" "),e("h3",{attrs:{id:"noext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#noext"}},[t._v("#")]),t._v(" noext")]),t._v(" "),e("p",[t._v('Disable "extglob" style patterns like '),e("code",[t._v("+(a|b)")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"nocase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nocase"}},[t._v("#")]),t._v(" nocase")]),t._v(" "),e("p",[t._v("Perform a case-insensitive match.")]),t._v(" "),e("h3",{attrs:{id:"nonull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nonull"}},[t._v("#")]),t._v(" nonull")]),t._v(" "),e("p",[t._v("When a match is not found by "),e("code",[t._v("minimatch.match")]),t._v(", return a list containing\nthe pattern itself if this option is set.  When not set, an empty list\nis returned if there are no matches.")]),t._v(" "),e("h3",{attrs:{id:"matchbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#matchbase"}},[t._v("#")]),t._v(" matchBase")]),t._v(" "),e("p",[t._v("If set, then patterns without slashes will be matched\nagainst the basename of the path if it contains slashes.  For example,\n"),e("code",[t._v("a?b")]),t._v(" would match the path "),e("code",[t._v("/xyz/123/acb")]),t._v(", but not "),e("code",[t._v("/xyz/acb/123")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"nocomment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nocomment"}},[t._v("#")]),t._v(" nocomment")]),t._v(" "),e("p",[t._v("Suppress the behavior of treating "),e("code",[t._v("#")]),t._v(" at the start of a pattern as a\ncomment.")]),t._v(" "),e("h3",{attrs:{id:"nonegate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nonegate"}},[t._v("#")]),t._v(" nonegate")]),t._v(" "),e("p",[t._v("Suppress the behavior of treating a leading "),e("code",[t._v("!")]),t._v(" character as negation.")]),t._v(" "),e("h3",{attrs:{id:"flipnegate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flipnegate"}},[t._v("#")]),t._v(" flipNegate")]),t._v(" "),e("p",[t._v("Returns from negate expressions the same as if they were not negated.\n(Ie, true on a hit, false on a miss.)")]),t._v(" "),e("h3",{attrs:{id:"partial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#partial"}},[t._v("#")]),t._v(" partial")]),t._v(" "),e("p",[t._v("Compare a partial path to a pattern.  As long as the parts of the path that\nare present are not contradicted by the pattern, it will be treated as a\nmatch.  This is useful in applications where you're walking through a\nfolder structure, and don't yet have the full path, but want to ensure that\nyou do not walk down paths that can never be a match.")]),t._v(" "),e("p",[t._v("For example,")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/*/c/d'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" partial"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true, might be /a/b/c/d")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/b'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/**/d'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" partial"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true, might be /a/b/.../d")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/x/y/z'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/a/**/z'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" partial"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false, because x !== a")]),t._v("\n")])])]),e("h3",{attrs:{id:"windowspathsnoescape"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windowspathsnoescape"}},[t._v("#")]),t._v(" windowsPathsNoEscape")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("\\\\")]),t._v(" as a path separator "),e("em",[t._v("only")]),t._v(", and "),e("em",[t._v("never")]),t._v(" as an escape\ncharacter.  If set, all "),e("code",[t._v("\\\\")]),t._v(" characters are replaced with "),e("code",[t._v("/")]),t._v(" in\nthe pattern.  Note that this makes it "),e("strong",[t._v("impossible")]),t._v(" to match\nagainst paths containing literal glob pattern characters, but\nallows matching with patterns constructed using "),e("code",[t._v("path.join()")]),t._v(" and\n"),e("code",[t._v("path.resolve()")]),t._v(" on Windows platforms, mimicking the (buggy!)\nbehavior of earlier versions on Windows.  Please use with\ncaution, and be mindful of "),e("a",{attrs:{href:"#windows"}},[t._v("the caveat about Windows\npaths")]),t._v(".")]),t._v(" "),e("p",[t._v("For legacy reasons, this is also set if\n"),e("code",[t._v("options.allowWindowsEscape")]),t._v(" is set to the exact value "),e("code",[t._v("false")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"comparisons-to-other-fnmatch-glob-implementations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comparisons-to-other-fnmatch-glob-implementations"}},[t._v("#")]),t._v(" Comparisons to other fnmatch/glob implementations")]),t._v(" "),e("p",[t._v("While strict compliance with the existing standards is a worthwhile\ngoal, some discrepancies exist between minimatch and other\nimplementations, and are intentional.")]),t._v(" "),e("p",[t._v("If the pattern starts with a "),e("code",[t._v("!")]),t._v(" character, then it is negated.  Set the\n"),e("code",[t._v("nonegate")]),t._v(" flag to suppress this behavior, and treat leading "),e("code",[t._v("!")]),t._v("\ncharacters normally.  This is perhaps relevant if you wish to start the\npattern with a negative extglob pattern like "),e("code",[t._v("!(a|B)")]),t._v(".  Multiple "),e("code",[t._v("!")]),t._v("\ncharacters at the start of a pattern will negate the pattern multiple\ntimes.")]),t._v(" "),e("p",[t._v("If a pattern starts with "),e("code",[t._v("#")]),t._v(", then it is treated as a comment, and\nwill not match anything.  Use "),e("code",[t._v("\\#")]),t._v(" to match a literal "),e("code",[t._v("#")]),t._v(" at the\nstart of a line, or set the "),e("code",[t._v("nocomment")]),t._v(" flag to suppress this behavior.")]),t._v(" "),e("p",[t._v("The double-star character "),e("code",[t._v("**")]),t._v(" is supported by default, unless the\n"),e("code",[t._v("noglobstar")]),t._v(" flag is set.  This is supported in the manner of bsdglob\nand bash 4.1, where "),e("code",[t._v("**")]),t._v(" only has special significance if it is the only\nthing in a path part.  That is, "),e("code",[t._v("a/**/b")]),t._v(" will match "),e("code",[t._v("a/x/y/b")]),t._v(", but\n"),e("code",[t._v("a/**b")]),t._v(" will not.")]),t._v(" "),e("p",[t._v("If an escaped pattern has no matches, and the "),e("code",[t._v("nonull")]),t._v(" flag is set,\nthen minimatch.match returns the pattern as-provided, rather than\ninterpreting the character escapes.  For example,\n"),e("code",[t._v('minimatch.match([], "\\\\*a\\\\?")')]),t._v(" will return "),e("code",[t._v('"\\\\*a\\\\?"')]),t._v(" rather than\n"),e("code",[t._v('"*a?"')]),t._v(".  This is akin to setting the "),e("code",[t._v("nullglob")]),t._v(" option in bash, except\nthat it does not resolve escaped pattern characters.")]),t._v(" "),e("p",[t._v("If brace expansion is not disabled, then it is performed before any\nother interpretation of the glob pattern.  Thus, a pattern like\n"),e("code",[t._v("+(a|{b),c)}")]),t._v(", which would not be valid in bash or zsh, is expanded\n"),e("strong",[t._v("first")]),t._v(" into the set of "),e("code",[t._v("+(a|b)")]),t._v(" and "),e("code",[t._v("+(a|c)")]),t._v(", and those patterns are\nchecked for validity.  Since those two are valid, matching proceeds.")]),t._v(" "),e("p",[t._v("Note that "),e("code",[t._v("fnmatch(3)")]),t._v(" in libc is an extremely naive string comparison\nmatcher, which does not do anything special for slashes.  This library is\ndesigned to be used in glob searching and file walkers, and so it does do\nspecial things with "),e("code",[t._v("/")]),t._v(".  Thus, "),e("code",[t._v("foo*")]),t._v(" will not match "),e("code",[t._v("foo/bar")]),t._v(" in this\nlibrary, even though it would in "),e("code",[t._v("fnmatch(3)")]),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);