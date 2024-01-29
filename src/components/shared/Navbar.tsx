import { IoSearchSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { GetMeuDataApi } from "./api/GetMeuDataApi";
import { Box, Flex, Heading } from "@chakra-ui/react";


interface DataProps {
  slug: string;
  title: string;
}

const Navbar = () => {
  const pathname = useLocation().pathname;

  const { data } = GetMeuDataApi();

  const getCategory = data?.data?.categories;

  return (
    <>
      <header className="text-gray-600 body-font lg:px-28 md:px-0 z-50" style={{ backgroundColor: "ffffff" }}>
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">

          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src={"/logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-16"
            />
            <span className="ml-3 text-xl font-bold">SAMSARA BLOG</span>
          </Link>

          <nav className="flex title-font font-medium items-center gap-5 mb-4 md:mb-0">

            <Link
              to={"/"}
              className={`${pathname === "/"
                ? "mr-5    text-red"
                : "mr-5 hover:text-gray-900"
                } transition-all duration-300 hover:text-red`}

            >
              Home
            </Link>



          </nav>

          <div className="  flex ml-2 items-center rounded-full bg-gray-100 p-2 md:px-5">
            <IoSearchSharp className="h-6 text-gray-600" />
            <input
              className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search Blog"
            />
          </div>

        </div>

        <div className="container  flex flex-wrap   p-2  flex-col md:flex-row items-center">
          {
            pathname === "/" ? null : (
              pathname.startsWith("/blogs") && (
                <Flex p={1} pl={"10%"} width={"100%"} direction={"column"} gap={4} >
                  <Box>
                    <Heading fontSize={"26px"}>BLOG</Heading>
                  </Box>
                  <Box>
                    <nav className="flex title-font font-medium items-center gap-5 mb-4 md:mb-0">

                      {getCategory &&
                        getCategory.map((elem: DataProps) => (
                          <Link key={elem.slug} className=" title-font font-medium transition-all duration-300 hover:text-red hover:bg-white" to={`/category/${elem.title}`}>
                            {" "}
                            {elem.title}
                          </Link>
                        ))}
                    </nav>
                  </Box>
                </Flex>
              ) 
            )
          }
        </div>
      </header>
    </>
  );
};

export default Navbar;
