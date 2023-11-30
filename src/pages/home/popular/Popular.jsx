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
<<<<<<< HEAD
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
=======
        <Carousel data={data?.results} loading={loading} mediaType={endpoint}/>
>>>>>>> 9ba37c66a4a9be3a13b37d1a30478596ade72f05
    </div>
  )
}

export default Popular