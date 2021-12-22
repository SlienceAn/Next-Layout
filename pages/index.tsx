import type { NextPage } from 'next'
import ArrowNavbar from '../component/ArrowNavbar'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import Timeline from '../component/Timeline'
import PieChart from '../component/PieChart'
import Footer from '../component/Footer'

const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <ArrowNavbar />
        <ProfileCard />
        <Timeline />
        <PieChart />
      </div>
      <Footer />
    </div>
  )
}

export default Home
