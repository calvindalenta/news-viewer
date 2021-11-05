import fs from "fs";
import path from "path";

const rootDir = process.cwd()
const fileName = "sampleData.json"
const fullPath = path.join(rootDir, fileName)

function getRawJson(){
    return fs.readFileSync(fullPath, "utf-8")
}

export default function getArticles() {
    return JSON.parse(getRawJson())
}

// Should find another unique identifier
export function getArticleByTimestamp(timestamp) {
    const { articles } = getArticles()
    return articles.find(article => article.publishedAt === timestamp)
}