import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner"
import Trending from "./trending/Trending"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"

const Home = () => {
  return (
    <div className="homePage">
        <HeroBanner />
        <Trending />
        <ContentWrapper />
    </div>
  )
}

export default Home