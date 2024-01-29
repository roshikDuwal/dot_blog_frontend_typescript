
import { Flex, Heading } from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Base_Url } from "../../constants/Base_Url";


interface SliderDataProps {
  sliderData: {
    id: number;
    image: string;
    title: string;
    description: string;
    url: string
  }[];
}

export default function NewSlider({ sliderData }: SliderDataProps) {

  console.log(sliderData);
  
  return (
    <>
      <div className="lg:w-2/3 md:w-1/2 sm:w-full sm:mb-2 md:mt-0 mt-12 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=" w-full"
        >
          {sliderData && sliderData.map((elem) => (
            <SwiperSlide
              style={{
                width: "100%",
              }}
              key={elem.id}
            >
              <Link
                to={`${elem.url}`}
                style={{
                  width: "100%",
                }}
              >
                <img
                  src={`${Base_Url}/uploads/sliders/${elem.image}`}
                  alt="step"
                  width={1000}
                  height={500}
                  className="w-100%"
                />

                <Flex
                  color={"black"}
                  direction={"column"}
                  position={"absolute"}
                  bottom={"26%"}
                  left={"7%"}
                >
                  
                  <Heading
                    fontSize={"36px"}
                    lineHeight={"46px"}
                    fontWeight={"700"}
                  >
                    {elem.title}
                  </Heading>

                {
                  elem.description &&   <Heading fontSize={"17px"}>
                  {HTMLReactParser(elem.description)}
                </Heading>
                }
                  
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
