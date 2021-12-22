import type { AppProps } from 'next/app'
import '../styles/info.scss'
import '../styles/normalize.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
