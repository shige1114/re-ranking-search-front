import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from 'react'
import Get from "@/domain/Get"
import Post from "@/domain/Post"
const DEFAULT_VOLUME = 7
const URL = process.env.NEXT_PUBLIC_URL
export const useGetMore = (makeHtml) => {
    const router = useRouter()

    const [updateData, setUpdateData] = useState([])
    const [staticData, setStatic] = useState([]);
    const [offset, setOffset] = useState(7)
    const [point, setPoint] = useState(0)

    useEffect(() => {
        setStatic((current) => [...updateData]);
    }, [updateData]);

    useEffect(() => {
        const session_id = window.location.pathname.split("/")[2]
        const query = new URLSearchParams(window.location.search).get("query")
        // setOffset(new URLSearchParams(window.location.search).get("offset"))
        const fetchData = async () => {
            const url_offset = parseInt(new URLSearchParams(window.location.search).get("offset"), 10)
            setOffset(current => {
                if (url_offset > current) {
                    console.log(url_offset)
                    return url_offset;
                }
                return current;
            });
            console.log(offset)

            const data = await Get(URL + "search/", { session_id: session_id, query: query, offset: offset, point: point });
            if (data !== null) {
                setUpdateData(makeHtml(data,clickAriticle));
            }
        };
        fetchData();
    }, [offset]);
    const clickAriticle = useCallback(async (id, point,is_ad,  url) => {
        const session_id = window.location.pathname.split("/")[2]
        const query = new URLSearchParams(window.location.search).get("query")

        console.log(id)
        if (is_ad) {
            const clickdids = JSON.parse(localStorage.getItem('clickdids') || '[]');
            const displayedids = JSON.parse(localStorage.getItem('displayedids') || '[]');
            const addids = JSON.parse(localStorage.getItem('addclickdids') || '[]');

            if (!addids.includes(id)) {
                addids.push(id)
                localStorage.setItem('addclickdids', JSON.stringify(addids));
            }
            const next_offset = offset + DEFAULT_VOLUME
            await Post(URL + "rerank/", {r: clickdids, s: displayedids, ad: addids, session_id: session_id} )
            router.push({ pathname: "/search/" + session_id, query: { query: query, offset: next_offset, point: point } }, undefined, {
                scroll: false,
                shallow: true,
            })
            router.push(url)
        } else {
            const ids = JSON.parse(localStorage.getItem('clickdids') || '[]');
            if (!ids.includes(id)) {
                ids.push(id)
                localStorage.setItem('clickdids', JSON.stringify(ids));
            }
            router.push({ pathname: "/search/" + session_id, query: { query: query, offset: offset, point: point } }, undefined, {
                scroll: false,
                shallow: true,
            })
            router.push(url)
        }

    }, [offset, point])
    const onClick = useCallback(async () => {
        const session_id = window.location.pathname.split("/")[2]
        const query = new URLSearchParams(window.location.search).get("query")
        const next_offset = offset + DEFAULT_VOLUME
        console.log(query, next_offset)
        router.push({ pathname: "/search/" + session_id, query: { query: query, offset: next_offset, point: ""} }, undefined, {
            scroll: false,
        })
        setOffset(current => {
            return next_offset;
        });
    }, [offset, router]);

    return { onClick, clickAriticle, staticData };
};