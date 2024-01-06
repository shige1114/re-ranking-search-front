import React from "react";

export const Article = (id, title, snippet, url, window_url, id_ad, ...props) => {
    const isAd = (is_ad) => {
        if (is_ad) {
            return <p className="ad">スポンサー</p>
        }
    }
    return (<div className="p-4 border-b border-gray-200" onClick={onClick(id)}>
        {isAd(is_ad)}
        <a href={url} className="text-lg text-blue-800 font-medium hover:underline">
            {title}
        </a>
        <div className="text-sm text-green-700">
            {window_url}
        </div>
        <p className="text-gray-600">
            {snippet}
        </p>
    </div>)
}