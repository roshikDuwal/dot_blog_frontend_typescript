import { useQuery } from "react-query";
import { axiosInstance } from "../../../axios/Axios"

export const GetAllDataApi=()=>{

    async function getdata(){
        const res=await axiosInstance.get("/api/home")

        return res;
    }

    const {data,isLoading}=useQuery("all-data",getdata)

    return {
        data,
        isLoading
    }

}