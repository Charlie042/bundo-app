import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query";
import { api } from "@/utils/api";
import { RootType} from "@/app/model/query";



const fetchData = async():Promise<RootType> =>{
    const response = await api.get("/Stage");
    console.log(response);
    return response.data.data
    
}

export const useFetchData = () => {
  return useQuery<RootType,Error>({
    queryKey: ["Stage"], 
    queryFn: fetchData,
    staleTime: 60000, 
  });
};
const fetchGetData = async():Promise<RootType> =>{
    const response = await api.get("/Stage/businessLocations")
     
    return response.data.data
    
}

export const useFetchGetData = () => {
  return useQuery<RootType,Error>({
    queryKey: ["Location"], 
    queryFn: fetchGetData,
    staleTime: 60000, 
  });
};

export const postData = async (data: ModalApiProps) => {
  try {
    const response = await api.post("/Stage", data,{
      headers:{
        "Content-Type": undefined
      }
    });

    return response.data;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};

export const usePostData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Stage"] }); 
    },
  });
};


