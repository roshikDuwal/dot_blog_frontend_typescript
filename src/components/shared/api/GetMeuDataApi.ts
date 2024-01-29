import { useQuery } from "react-query";
import { axiosInstance } from "../../../axios/Axios";


export const GetMeuDataApi = () => {
 
    async function getmenudata() {
      const res = await axiosInstance.get(`/api/categories-menu`);
  
      return res;
    }
  
    const { data, isLoading } = useQuery({
      queryKey:["meudata-data"],
      queryFn:getmenudata
  
    });
  
    return {
      data,
      isLoading,
    };
  };