const mdContainer = require("markdown-it-container");

module.exports = markdownIframe = (md)=> {
    md.use(mdContainer, "iframe", {
        validate: (params) => {
            return params.trim().match(/^iframe+(.*)$/);
        },
        render: (tokens, idx) => {
            const m = tokens[idx].info.trim().match(/^iframe+(.*)$/m);
            if (tokens[idx].nesting === 1) {
                const content =
                    `<div class="iframe-container">
    <iframe style="width: 100%; background-color: #151617; border-radius: 8px; height: 680px;" src="${m ? m[1] : ""}"></iframe>
`
                return content;
            } else {
                return "</div>\n";
            }
        }
    })
}