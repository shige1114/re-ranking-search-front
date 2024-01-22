import React from "react";
import useArObserver from '@/components/ObservArticle/Observer'
import Link from 'next/link'
export const Article = ({id,point, title, snippet, url, window_url, is_ad,clickAriticle, ...props}) => {
    const nodeRef = useArObserver(id)
    
    const isAd = (ad) => {
        if (ad) {
            return <p>スポンサー</p>
        }
    }

    return (<div id={point} className="p-4 border-b border-gray-200" ref={nodeRef} {...props}>
        {isAd(is_ad)}
        <Link onClick={(e)=>{e.preventDefault(); clickAriticle(id, point,is_ad,  url);}} href={url} className="text-lg text-blue-800 font-medium hover:underline">{title}</Link>
        <div className="text-sm text-green-700">
            {window_url}
        </div>
        <p className="text-gray-600">
            {snippet}
        </p>
    </div>)
}