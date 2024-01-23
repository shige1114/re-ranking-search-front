import { Content, Inter } from 'next/font/google'
import { Article } from '@/components/Article/Article';
import { SearchBar } from '@/components/Search/Search';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGetMore } from '../../components/GetMore';


const inter = Inter({ subsets: ['latin'] })
const makeResults = (data, clickAriticle) => {
    return data.map((d, index) => (<Article point={index} key={d.id} clickAriticle={clickAriticle}{...d} />))
}

export default function Home(props) {
    const router = useRouter()
    const { onClick, staticData } = useGetMore(makeResults)
    const [ref, setRef] = useState(null)
    const { query } = router.query
    const scrollToRef = (ref) => {
        if (ref) {
            window.scrollTo({
                top: ref.offsetTop,
                behavior: 'auto'
            })
        }
    }
    useEffect(() => {
        const point = new URLSearchParams(window.location.search).get("point", "")
        console.log(point)
        if (point !== "") {
            const element = document.getElementById(point)
            if (element) {
                scrollToRef(element)
            } else {
                console.log(`Element with id ${point} not found.`)
            }
        }
    }, [staticData])
    const viewResults = () => {
        if (staticData === null) return <></>
        else if (staticData.length === 0) return <>no results</>
        else return <>{staticData}</>
    }


    return (
        <div>
            <SearchBar defaultValue={query} onClick={() => { }} />
            {viewResults()}
            <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={onClick}>もっと見る</button>
        </div>
    )
}


// export const getServerSideProps = async(ctx) => {
//     const offset = conetxt.query["offset"]
//     const session_id = conetxt.query["session_id"]
//     const point = conetxt.query["point"]
//     const query = conetxt.query["query"]

//     return {porps:{offset: offset,session_id:session_id,point: point,query:query}}
// }