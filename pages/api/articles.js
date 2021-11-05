import getArticles from "../../lib/articles"

export default function handler(req, res) {
    res.status(200).json(getArticles())
}