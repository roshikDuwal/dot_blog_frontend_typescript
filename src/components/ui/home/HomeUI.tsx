import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import BlogElement from "../../shared/BlogElement";


interface DataProps {
  description: string;
  id: number;
  image: string;
  slug: string;
  source: string;
  title: string;
  created_at: string;
}

interface MostViewProps {
  getTrendyData: DataProps[];
  getLatestData: DataProps[];
  getPopularData: DataProps[];
}

const HomeUI = ({ getTrendyData, getPopularData }: MostViewProps) => {
  const [activeTab, setActiveTab] = useState<string>("trendy");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderBlogElements = (data: DataProps[]) => {
    return (
      <div className="p-2 w-full flex flex-col gap-2">
        {data && data.map((elem) => (
          <BlogElement key={elem.id} elem={elem} />
        ))}
      </div>
    );
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full pl-2 ">
      <Flex gap={5} mt={{ base: "12px", md: "0px" }} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"10px"}>
        <button onClick={() => handleTabClick("trendy")} className={`px-6 py-2 shadow-xl uppercase ${activeTab === "trendy" ? "bg-blue text-white" : "bg-white text-darkblue"}`} style={{
          fontSize: "14px"
        }}>
          Trendy
        </button>

        {/* <button onClick={() => handleTabClick("latest")} className={`px-6 py-2 shadow-xl uppercase ${activeTab === "latest" ? "bg-blue text-white" : "bg-white text-darkblue"}`}  style={{
          fontSize: "14px"
        }}>
          Latest
        </button> */}

        <button onClick={() => handleTabClick("popular")} className={`px-6 py-2 shadow-xl uppercase ${activeTab === "popular" ? "bg-blue text-white" : "bg-white text-darkblue"}`}  style={{
          fontSize: "14px"
        }}>
          Popular
        </button>
      </Flex>

      {activeTab === "trendy" && renderBlogElements(getTrendyData)}
      {/* {activeTab === "latest" && renderBlogElements(getLatestData)} */}
      {activeTab === "popular" && renderBlogElements(getPopularData)}
    </div>
  );
};

export default HomeUI;
