import React from 'react';
import { Article } from '@/components/Article/Article';
import { SearchBar } from '@/components/Search/Search'; // Assuming SearchBar is a default export
const id = 1
const prop = {
  id: 1,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: false,
};

const prop1 = {
  id: 2,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: true,
};

const prop2 = {
  id: 3,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: true,
};

const prop3 = {
  id: 4,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: true,
};
const prop4 = {
  id: 5,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: true,
};
const prop5 = {
  id: 6,
  title: `記事のタイトル${id}`,
  snippet: `これは記事の要約${id}です。`,
  url: `https://example.com/article${id}`,
  window_url: 'https://example.com',
  is_ad: true,
};
const Test = () => {
  return (
    <div>
      <SearchBar onClick={() => { }} />
      <Article {...prop} />
      <Article {...prop1} />
      <Article {...prop2} />
      <Article {...prop3} />
      <Article {...prop4} />
      <Article {...prop5} />
    </div>
  );
};

export default Test;