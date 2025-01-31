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
     
    console.log(response);
    return response.data.data
    
}

export const useFetchGetData = () => {
  return useQuery<RootType,Error>({
    queryKey: ["Location"], 
    queryFn: fetchGetData,
    staleTime: 60000, 
  });
};

export const PostData = async (data: ModalApiProps) => {
  const response = await api.post('/Stage',data)
  return response
}

export const usePostData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostData,
    mutationKey: ["location"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Stage"] }); 
    },
  });
};