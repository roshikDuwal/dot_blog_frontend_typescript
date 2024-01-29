import { Flex } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="body-font bg-footerbg mt-10 text-white">
        <div className="border-t px-5 border-b-2 border-dotted  border-[#8b95aa]  text-gray">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center px-16  items-end md:justify-start">
              <div className="flex flex-col sm:mr-4 mr-2">
                <Link
                  to={"/"}
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                  <img
                    src={"/logo.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-16"
                  />

                  <span className="ml-3 text-3xl text-white">Blog Page</span>
                </Link>

                <Flex
                  gap={2}
                  mt={4}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <FaFacebookSquare className="text-2xl cursor-pointer" />
                  <FaInstagram className="text-2xl cursor-pointer" />
                </Flex>
              </div>
            </div>

            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                <div className="flex sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Your Email Address"
                    className="w-full bg-white  px-4 py-3 border-none focus:border-none outline-none text-[#8b95aa] "
                  />
                  <button className=" w-32 text-white  flex items-center justify-center text-sm  bg-blue border-0 py-3 px-4 focus:outline-none ">
                    SIGN UP
                  </button>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap    md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex flex-col justify-center items-center">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 text-white text-base">
                <li className="p-2  hover:underline">
                  <Link to={"/"}>First Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Second Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Third Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex flex-col justify-center items-center">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 text-white text-base">
                <li className="p-2  hover:underline">
                  <Link to={"/"}>First Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Second Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Third Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex flex-col justify-center items-center">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 text-white text-base">
                <li className="p-2  hover:underline">
                  <Link to={"/"}>First Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Second Link</Link>
                </li>
                <li className="p-2  hover:underline">
                  <Link to={"/"}>Third Link</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#232d36]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <Link
                to="/"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @knyttneve
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
