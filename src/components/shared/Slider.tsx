

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../../styles/slider/slider.css"

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";
import { Base_Url } from "../../constants/Base_Url";

interface LatestDataProps {
  description: string;
  id: number;
  image: string;
  slug: string;
  source: string;
  title: string;
  created_at: string;
}

interface FeatureDataProps {
  created_at: string;
  description: string;
  id: number;
  image: string;
  slug: string;
  source: string;
  title: string;

}

interface SliderProps {
  type: string;
  getLatestData?: LatestDataProps[];
  getFeatureInfoData?: FeatureDataProps[];
}

const Slider = ({ type, getLatestData, getFeatureInfoData }: SliderProps) => {
  //shortInfo
  const slideLeft = () => {
    let slider = document.getElementById("slider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = (slider.scrollLeft || 0) - 235;
    }

  };

  const slideRight = () => {
    let slider = document.getElementById("slider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = (slider.scrollLeft || 0) + 235;
    }
  };

  // FeatureSlider
  const slideFeatureLeft = () => {
    let slider = document.getElementById("featureslider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = (slider.scrollLeft || 0) - 235;
    }
  };

  const slideFeatureRight = () => {
    let slider = document.getElementById("featureslider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = (slider.scrollLeft || 0) + 235;
    }
  };


  return (
    <>
      <section>
        <div className={`relative py-1 ${type==="latestnews"?" h-[8rem]  mb-4":null} `}>
          {type === "latestnews" ? (
            <>
              <button
                className="h-24 w-6 absolute md:bottom-4 sm:bottom-7 bg-bgcolor"
                title="scroll left "
                onClick={slideLeft}
                style={{
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="h-24 w-6 absolute md:bottom-4 sm:bottom-7  right-0 bg-bgcolor "
                title="scroll right "
                onClick={slideRight}
                style={{
                  boxShadow:
                    "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                }}
              >
                <Text pl={1}>
                  {" "}
                  <IoIosArrowForward />
                </Text>
              </button>
            </>
          ) : type === "feature" ? (
            <>
              <div
                className="flex justify-between mt-6 "
                style={{ width: "100%" }}
              >
                <Heading
                  fontSize={"24px"}
                  fontWeight={"500"}
                  textTransform={"capitalize"}
                >
                  Features Info
                </Heading>
                <div>
                  <button
                    className=" border-2 border-gray px-2 py-2 m-1 shadow-2xl"
                    title="scroll left "
                    onClick={slideFeatureLeft}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    className=" border-2 px-2 py-2 border-gray m-1 shadow-2xl"
                    title="scroll right "
                    onClick={slideFeatureRight}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {type === "latestnews" ? (
            <>
              <div className="row-container " id="slider">
                {getLatestData && getLatestData &&
                  getLatestData.map((item) => (
                    <Box key={item.id}>
                      <Link
                        to={`/blogs/${item.slug}`}
                        className="hover:text-primary"
                      >
                        <Flex
                          w={{ md: "22rem", sm: "15rem" }}
                          flexDirection={{ base: "column", md: "row" }}
                          gap={3}
                          alignItems={{ sm: "center" }}
                          p={1}
                        >
                          <Flex
                            h={"6rem"}
                            w={"4rem"}
                            flex={1}
                            borderRadius={"5px"}
                            alignItems={"center"}

                          >
                            <img
                              src={`${Base_Url}/uploads/blog/${item.image}`}

                              alt="product"
                              width={1000}
                              height={1000}
                              style={{
                                width: "100%",
                                height: "80%",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </Flex>

                          <Flex direction={"column"} flex={3} pt={2}>
                            <Box
                              textAlign={{ base: "center", md: "start" }}
                              fontSize={{ md: "16px", sm: "13px" }}
                              lineHeight={"21px"}
                              fontWeight={"500"}
                              color={"#17222b"}
                              _hover={{
                                color: "#108ffc",

                                transition: "color 0.3s",
                              }}
                            >
                              {item.title.toUpperCase()}
                            </Box>
                            <Box
                              textAlign={{ base: "center", md: "start" }}
                              fontSize={{ md: "15px", sm: "12px" }}
                              fontWeight={"300"}
                              color={"#515a60"}
                              textTransform={"capitalize"}
                            >
                              {HTMLReactParser(item.description.slice(0, 75))}
                            </Box>
                          </Flex>
                        </Flex>
                      </Link>
                    </Box>
                  ))}
              </div>
            </>
          ) : type === "feature" ? (
            <>
              <div className="row-container" id="featureslider">
                {getFeatureInfoData && getFeatureInfoData.map((item) => (
                  <Box key={item.id}>
                    <Link to={`/blogs/${item.slug}`}>
                      <Flex
                        w={"15rem"}
                        h={"20rem"}
                        flexDirection={{ sm: "column", md: "row" }}
                        gap={3}
                        alignItems={"center"}
                        boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                        position={"relative"}
                        className="imagehover"
                      >
                        <Box>
                          <img
                            src={`${Base_Url}/uploads/blog/${item.image}`}

                            alt="product"
                            width={500}
                            height={500}

                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>

                        <Flex
                          p={1}
                          textAlign={"start"}
                          position={"absolute"}
                          color={"white"}
                          width={"100%"}
                          bottom={"10px"}
                          fontWeight={"900"}
                          direction={"column"}
                        >
                          <Flex gap={2} alignItems={"center"}>
                            <Text textTransform={"uppercase"} fontSize={"14px"}>
                              Technology
                            </Text>
                            {""}/{""}
                            <Text fontSize={"14px"} fontWeight={"400"}>
                              {" "}
                              {
                                new Date(item.created_at)
                                  .toISOString()
                                  .split("T")[0]
                              }
                            </Text>
                          </Flex>

                          <Text
                            fontSize={"16px"}
                            textTransform={"capitalize"}
                            fontWeight={"700"}
                            lineHeight={"22px"}
                          >
                            {item.title.slice(0, 80).toUpperCase()}...
                          </Text>
                        </Flex>
                      </Flex>
                    </Link>
                  </Box>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
};
export default Slider;
