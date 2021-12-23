import type { NextPage } from 'next'
import ArrowNavbar from '../component/ArrowNavbar'
import Navbar from '../component/Navbar'
import BackgroundCilp from '../component/BackgroundCilp'
import ProfileCard from '../component/ProfileCard'
import Timeline from '../component/Timeline'
import PieChart from '../component/PieChart'
import PerspectiveCube from '../component/PerspectiveCube'
import Footer from '../component/Footer'

const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <Navbar />
        <ArrowNavbar />
        <ProfileCard />
        <Timeline />
        <PieChart />
        <PerspectiveCube />
      </div>
      <Footer />
    </div>
  )
}

export default Home
