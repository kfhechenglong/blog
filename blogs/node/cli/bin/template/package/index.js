import ejs from 'ejs'
import fs from 'fs'
import prettier from "prettier";
import { getRootPath } from "../../utils/index.js";

export default ({ packageName }) => {
  const file = fs.readFileSync(getRootPath('template/package/package.ejs'))
  const code = ejs.render(file.toString(), { packageName })
  return prettier.format(code, { parser: 'json' })
}
