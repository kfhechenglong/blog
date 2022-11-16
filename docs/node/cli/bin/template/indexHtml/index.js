import fs from 'fs'
import ejs from 'ejs'
import prettier from "prettier";
import { getRootPath } from '../../utils/index.js'
export default ({ packageName }) => {
    const file = fs.readFileSync(getRootPath('template/indexHtml/indexHtml.ejs'))
    const htmlCode = ejs.render(file.toString(), { packageName })
    return prettier.format(htmlCode, { parser: 'html' })
}