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
  const [results, setResults] = useState(null)
  const query = router.query.query
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Get(URL + "/search/", { query: query, offset: offset });
        setUpdateData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [offset, query]);

  const getSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const userName = form.get("query")
    return userName
  }

  const handleSubmit = async (event) => {
    const form_query = getSubmit(event)
    const data = await Get(URL+"search/", { query: form_query })
    console.log(data)
    if (data !== null) {
      await makeResults(data)
      console.log(results)
    } else {
      console.log("正しいキーワードを入力してください")
    }
  }

  const makeResults = (data) => {
    setResults(data.map((d)=>(<Article key={d.id}{...d}/>)))
  }

  const viewResults = ()=>{
    if (results === null) return <></>
    else if (results.length === 0) return <>no results</>
    else return <>{results}</>
  }
  
  return (
    <div>
      <SearchBar defaultValue={query} onClick={handleSubmit} />
      {viewResults()}
    </div>
  )
}