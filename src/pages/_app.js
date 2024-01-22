import '@/styles/globals.css'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
