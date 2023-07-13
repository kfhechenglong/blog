const blogGenerator = require('./plop-templates/blog/prompt')

module.exports = function (plop) {
    plop.setGenerator('blog', blogGenerator);
}