import Post from "@/domain/Post"
import { data } from "autoprefixer"
import { setCookie } from "nookies"

const URL = process.env.NEXT_URL
const handler = async (req, res) => {
    if (req.method === "POST") {
        const { username, query } = req.body
        console.log(username, query)
        const data = await Post(URL + "login/", { username: username, query: query })
        if (data === null) {
            res.status(400).json({ message: 'Login fail' })
            return
        }

        console.log(data)
        res.status(200).json({ message: 'Login Successful',data: data })
    }
}
export default handler