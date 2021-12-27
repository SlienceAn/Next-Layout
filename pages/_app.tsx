import type { AppProps } from 'next/app'
import '../styles/normalize.scss'
import '../styles/Navbar.scss'
import '../styles/ArrowNavbar.scss'
import '../styles/BackgroundCilp.scss'
import '../styles/PerspectiveCube.scss'
import '../styles/Timeline.scss'
import '../styles/ProfileCard.scss'
import '../styles/PieChart.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
