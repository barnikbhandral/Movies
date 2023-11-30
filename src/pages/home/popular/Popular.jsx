import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../carousel/Carousel";


const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const {data, loading} = useFetch(`/${endpoint}/popular`)


    const onTabChange = (tab) => {
      setEndpoint(tab === "Movie" ? "movie" : "tv")
    }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Popular</span>
            <SwitchTabs data={["Movie","TV Shows"]} onTabChange={onTabChange}/>  
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} mediaType={endpoint}/>
    </div>
  )
}

export default Popular