import type { NextPage } from 'next'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import ScrollParallax from '../component/ScrollParallax'
import Timeline from '../component/Timeline'
import ArrowNavbar from '../component/ArrowNavbar'
import Footer from '../component/Footer'

const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <ScrollParallax />
        <ProfileCard />
        <Timeline />
      </div>
      <Footer />
    </div>
  )
}

export default Home
