import { useEffect } from "react";
import NewSlider from "../../components/shared/NewSlider";
import Slider from "../../components/shared/Slider";
import HomeUI from "../../components/ui/home/HomeUI";
import { GetAllDataApi } from "./api/GetAllDataApi"

import 'aos/dist/aos.css'
import Aos from "aos";

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
    window.scrollTo(0, 0)
}, []);

  const { data } = GetAllDataApi();

 
  
  
  const getLatestData = data?.data?.latestBlog;
  const getFeatureInfoData = data?.data?.featured;
  const getPopularData = data?.data?.popular;
  const getTrendyData = data?.data?.trendy;
  const sliderData=data?.data?.sliders;

  return (
    <>
      <section className="bg-bgcolor xl:px-36 lg:px-4 md:px-4 sm:px-4 shadow-inner">

        <Slider type="latestnews" getLatestData={getLatestData} />

        <section className="text-gray-600 body-font">
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full ">

              <NewSlider sliderData={sliderData} />

              <HomeUI
                getLatestData={getLatestData}
                getPopularData={getPopularData}
                getTrendyData={getTrendyData}
              />

            </div>
          </div>
        </section>

        <Slider type="feature" getFeatureInfoData={getFeatureInfoData} />
      </section>
    </>
  )
}

export default Home