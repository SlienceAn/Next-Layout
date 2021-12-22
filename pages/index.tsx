import type { NextPage } from 'next'
import ArrowNavbar from '../component/ArrowNavbar'
import BackgroundCilp from '../component/BackgroundCilp'
const Home: NextPage = () => {
  return (
    <div className="box">
      <div>
        <BackgroundCilp />
        <ArrowNavbar />
      </div>
    </div>
  )
}

export default Home
