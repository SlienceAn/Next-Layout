import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import ScrollParallax from '../component/ScrollParallax'
import Timeline from '../component/Timeline'
import Footer from '../component/Footer'
import TextLayout from '../component/TextLayout'
import FixedTable from '../component/FixedTable'
import ArrowNavbar from '../component/ArrowNavbar'

const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <Head>
          <title>Next.js+SASS</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="title" />
        </Head>
        <BackgroundCilp />
        <ScrollParallax />
        <div className="box-secondry">
          <TextLayout text="Profile Card" />
          <ProfileCard />
        </div>
        <div className="box-secondry">
          <TextLayout text="Arrow Navbar" />
          <ArrowNavbar />
        </div>
        <div className="box-secondry">
          <TextLayout text="Fixed Table" />
          <FixedTable />
        </div>
        <div className="box-secondry">
          <TextLayout text="Timeline" />
          <Timeline />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
