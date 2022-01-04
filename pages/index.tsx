import type { NextPage } from 'next'
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
  padding: '.5rem'
} as React.CSSProperties

const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <ScrollParallax />
        <div style={Layout}>
          <TextLayout text="Profile Card" />
          <ProfileCard />
        </div>
        <div style={Layout}>
          <TextLayout text="Table Row and Col Fixed" />
          <FixedTable />
        </div>
        <div style={Layout}>
          <TextLayout text="Arrow Navbar" />
          <ArrowNavbar />
        </div>
        {/* <Timeline /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
