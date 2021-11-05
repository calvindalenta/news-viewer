import fs from "fs";
import path from "path";

const rootDir = process.cwd()
const fileName = "sampleData.json"
const fullPath = path.join(rootDir, fileName)

export default function getArticles() {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return fileContents
}