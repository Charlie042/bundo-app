import { useQuery, } from "@tanstack/react-query";
import { api } from "@/utils/api";
import { RootType} from "@/app/model/query";


const fetchData = async():Promise<RootType> =>{
    const response = await api.get("/Stage/");
    return response.data.data
    console.log(response)
}

export const useFetchData = () => {
  return useQuery<RootType,Error>({
    queryKey: ["Stage"], 
    queryFn: fetchData,
    staleTime: 60000, 
  });
};