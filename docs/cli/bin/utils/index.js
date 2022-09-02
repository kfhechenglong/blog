import path from 'path'
import { fileURLToPath } from 'url'
export function getRootPath (pathUrl) {
    const __dirname = fileURLToPath(import.meta.url)
    return path.resolve(__dirname, `../../${pathUrl}`)
};