import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Article } from '@/components/Article/Article';
import { SearchBar } from '@/components/Search/Search';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Get from '@/domain/Get';
const inter = Inter({ subsets: ['latin'] })
const URL = process.env.NEXT_PUBLIC_URL
const DEFAULT_VOLUME = 15



export default function Home() {
    const router = useRouter()
    const { session_id,query,offset } = router.query || ""

    const getSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const userName = form.get("query")
        return userName
    }

    const handleSubmit = async (event) => {
        const form_query = getSubmit(event)
        console.log(form_query)
        router.push({ pathname: "/search/" + session_id, query: { query:query,offset: offset } })

    }

    return (
        <div>
            <h1>Klab</h1>
            <SearchBar defaultValue={query} onClick={handleSubmit} />
        </div>
    )
}