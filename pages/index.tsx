import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import ScrollParallax from '../component/ScrollParallax'
import Timeline from '../component/Timeline'
import Footer from '../component/Footer'
import TextLayout from '../component/TextLayout'
import FixedTable from '../component/FixedTable'
import ArrowNavbar from '../component/ArrowNavbar'

const Layout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 0rem'
} as React.CSSProperties

const Home: NextPage = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Head>
        <title>Next.js+SASS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
      </Head>
      <ul>
        {new Array(5).fill("Link").map((el, idx) =>
          <Link
            href={{
              pathname: "/Profile",
              query: {
                id: idx + 1,
              }
            }}
          >
            <li>
              <a>Profile-{el}-{idx + 1}</a>
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Home
