import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import HTMLReactParser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { GetAllDataApi } from "../home/api/GetAllDataApi";
import { Base_Url } from "../../constants/Base_Url";
import { GetSingleDataApi } from "./api/GetSingleData";

import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import Aos from "aos";



export const Blog = () => {
  const { id } = useParams()

  const { data } = GetAllDataApi();
  const { data: blogData } = GetSingleDataApi(id!);

  const getLatestData = data?.data?.latestBlog;
  const getPopularData = data?.data?.popular;
  const getTrendyData = data?.data?.trendy;


  const blog = blogData?.data?.blog

  useEffect(() => {
    Aos.init({ duration: 1000 })
    window.scrollTo(0, 0)
}, []);


  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = blog && new Date(blog[0].created_at);

  return (
    <>
      {
        blog && Array.isArray(blog) && blog.length > 0 &&
        getLatestData && getPopularData && getTrendyData && (
          <section className="bg-bgcolor xl:px-36 lg:px-4 md:px-4 sm:px-4  shadow-inner ">
            <Helmet>
              <title>{blog[0].title}</title>
              <link rel="canonical" href={`http://localhost:5173/blogs/${blog[0].title}`} />
            </Helmet>
            <div className="container  mx-auto flex flex-wrap">
              <Breadcrumb my={5} fontSize={"0.9rem"} color={"gray"}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink>Blog</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>
                    {blog[0].title.charAt(0).toUpperCase() +
                      blog[0].title.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>

              <div className="flex flex-wrap w-full justify-center ">
                <div className="lg:w-2/3 md:w-1/2 ">
                  <Flex direction={"column"}>
                    <Text
                      mt={5}
                      textTransform={"uppercase"}
                      className=" text-primary"
                      fontSize={"1.5rem"}
                    >
                      Entertainment
                    </Text>

                    <Heading my={5}>{blog[0].title.toUpperCase()}</Heading>

                    <img
                      className=" object-cover object-center rounded-lg md:mt-0 mt-12"
                      style={{
                        width: "60rem",
                        height:"30rem",
                        objectFit:"contain"
                      }}
                      src={`${Base_Url}/uploads/blog/${blog[0].image}`}
                      alt="step"
                    />

                    <Flex justifyContent={"space-between"} my={5}>
                      <Flex gap={2}>
                        <Text fontWeight={"700"}>Source:</Text>
                        <Flex direction={"column"}>
                          <Text>{blog[0].source.toUpperCase()}</Text>
                          <Text>
                            {date.toLocaleDateString(undefined, options)}
                          </Text>
                        </Flex>
                      </Flex>

                      <Flex gap={2} alignItems={"center"}>
                        <Link
                          className=" border-2 border-gray px-3 py-3 m-1    shadow-2xl"
                          title="scroll left "
                          to={"/"}
                        >
                          Link
                        </Link>
                      </Flex>
                    </Flex>

                    <Box my={5} className=" text-gray capitalize" >
                      {HTMLReactParser(blog[0].description)}
                    </Box>
                  </Flex>
                </div>

              </div>
            </div>
          </section>
        )}
    </>
  );

}

export default Blog;
