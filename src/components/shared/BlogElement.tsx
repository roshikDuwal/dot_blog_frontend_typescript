
import { Link } from "react-router-dom";
import { Base_Url } from "../../constants/Base_Url";

interface DataProps {
  description: string;
  id: number;
  image: string;
  slug: string;
  source: string;
  title: string;
  created_at: string;
}

const BlogElement = ({ elem }:{elem:DataProps}) => {
  return (
    <>
      <Link to={`/blogs/${elem.slug}`}>
        <div className=" flex items-center border-gray-200  border-b-2 border-dotted lg:p-4 md:p-1 sm:p-3 ">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            width={80}
            height={80}
            src={`${Base_Url}/uploads/blog/${elem.image}`}
          />

          <div className="flex-grow">
            <div className="flex">
              <p className="text-blue lg:text-sm md:text-xs tracking-wider">
                Technology
              </p>
              <p className="ml-2 font-bold "> /</p>
              <p className=" font-thin text-gray-900 ml-4 lg:text-sm md:text-xs tracking-wide">
                {new Date(elem.created_at).toISOString().split("T")[0]}
              </p>
            </div>
            <h2 className="text-gray-900 title-font  lg:text-md md:text-sm ">
              {elem.title.toUpperCase()}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogElement;
