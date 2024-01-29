import { useQuery } from "react-query";
import { axiosInstance } from "../../../axios/Axios";



export const GetCategoryDataApi = (id: string) => {
  async function getcategorydata() {
    const res = await axiosInstance.get(`/api/${id}`);

    return res;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["category-data", id],
    queryFn: getcategorydata,
  });

  return {
    data,
    isLoading,
  };
};
