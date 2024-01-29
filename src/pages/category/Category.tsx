import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Aos from "aos";
import HTMLReactParser from "html-react-parser";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ShareButton from "../../components/shared/ShareButton";
import HomeUI from "../../components/ui/home/HomeUI";
import { Base_Url } from "../../constants/Base_Url";
import { GetAllDataApi } from "../home/api/GetAllDataApi";
import { GetCategoryDataApi } from "./api/GetCategoryData";

interface BlogProps {
  description: string;
  id: number;
  image: string;
  slug: string;
  source: string;
  title: string;
  created_at: string;
}



export const Category = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
    window.scrollTo(0, 0)
  }, []);


  const { id } = useParams();

  const { data } = GetAllDataApi();

  const { data: GetCategoriesData } = GetCategoryDataApi(id!);

  const getLatestData = data?.data?.latestBlog;
  const getPopularData = data?.data?.popular;
  const getTrendyData = data?.data?.trendy;


  const getCategoriesData = GetCategoriesData?.data?.categories






  return (
    <>
      {getCategoriesData && (
        <section className="bg-bgcolor xl:px-36 lg:px-4 md:px-4 sm:px-4 shadow-inner">
          <div className="container mx-auto flex flex-wrap">
            <Breadcrumb ml={4} my={5} fontSize={"0.9rem"} color={"gray"}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Category</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  {getCategoriesData[0].title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/3 md:w-1/2">
                <Flex direction={"column"}>
                  <Text pl={5} mt={5} fontSize={"1.5rem"}>
                    {`Category:${getCategoriesData[0].title}`}
                  </Text>

                  <article>
                    <Flex direction={"column"}>
                      {getCategoriesData[0].blogs.map((elem: BlogProps) => (
                        <section
                          key={elem.slug}
                          className="text-gray-600 body-font overflow-hidden"
                        >
                          <Link
                            to={`/blogs/${elem.slug}`}
                            className="cursor:pointer"
                          >
                            <div className="container mx-auto ">
                              <div className="ml-8 mt-4 flex flex-wrap justify-center items-center">

                                <div className=" flex flex-col gap-2 lg:w-4/5 w-full lg:pl-10 lg:py-6 px-4 mt-6 lg:mt-0">
                                  <Flex gap={2} alignItems={"center"}>
                                    <h2 className="text-blue lg:text-sm md:text-xs tracking-wider">
                                      {getCategoriesData[0].title.toUpperCase()}
                                    </h2>
                                    <h2 className="text-sm title-font tracking-widest">
                                      /
                                    </h2>

                                    <h2 className="font-thin text-gray-900 ml-4 lg:text-sm md:text-xs tracking-wide">
                                      {
                                        new Date(elem.created_at)
                                          .toISOString()
                                          .split("T")[0]
                                      }
                                    </h2>
                                  </Flex>

                                  <Heading fontSize={{ base: "14px", md: "16px", lg: "20px", xl: "22px" }} fontWeight={"700"}>
                                    {elem.title.charAt(0).toUpperCase() +
                                      elem.title.slice(1)}
                                  </Heading>

                                  <Text fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                                  >
                                    {HTMLReactParser(elem.description.slice(0, 99))}
                                  </Text>


                                </div>

                                <img
                                  alt="ecommerce"
                                  className="lg:w-1/5  w-full object-cover object-center rounded"
                                  src={`${Base_Url}/uploads/blog/${elem.image}`}
                                  style={{
                                    height: "6rem",
                                    objectFit: "contain"

                                  }}
                                />
                              </div>

                              <ShareButton slug={elem.slug} quote={elem.title} />

                            </div>
                          </Link>
                        </section>
                      ))}
                    </Flex>

                  </article>

                </Flex>
              </div>

              <HomeUI
                getLatestData={getLatestData}
                getPopularData={getPopularData}
                getTrendyData={getTrendyData}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Category;
