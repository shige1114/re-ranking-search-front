import { useRouter } from "next/router"
import { Login } from "@/components/Login/Login"
import Post from '@/domain/Post'
export default function LoginPage() {
    const router = useRouter()
    const query = router.query.query
    const getSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const userName = form.get("username")
        return userName
    }

    const handleSubmit = async(event) => {
        const userName = getSubmit(event)
        console.log(userName,query)
        const data = await Post('api/login',{username:userName,query:query})
        if (data !== null) {
           await router.push({ pathname: "/search/", query:{session_id:data,query:query, offset: 7 } })
        }else {
           await router.push('/error')
        }
    }

    return (
    <div>
        <Login onSubmit={handleSubmit}/>
    </div>
  )
}