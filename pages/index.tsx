import type { NextPage } from 'next'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import ScrollParallax from '../component/ScrollParallax'
import Timeline from '../component/Timeline'
import Footer from '../component/Footer'
import TextLayout from '../component/TextLayout'
const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <ScrollParallax />
        <div style={{ display: 'flex', justifyContent: 'center', padding: '.5rem' }}>
          <TextLayout />
        </div>
        <ProfileCard />
        <Timeline />
      </div>
      <Footer />
    </div>
  )
}

export default Home
