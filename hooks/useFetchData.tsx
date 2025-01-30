import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query";
import { api } from "@/utils/api";
import { RootType} from "@/app/model/query";


const token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjQ4OGY2YTY0YjQ4YjliZDA2NjZmNzBhIiwic2Vzc2lvbiI6IjY0ODhmNmFlNGI0OGI5YmQwNjY2ZjcxNSIsImlhdCI6MTY4NzIxNzYwMCwiZXhwIjoxNzE4Nzc1MjAwfQ.Tm-dUoTXSIZyNhV89Vmcs7hGD4eb0MPze3zyScBHzmuReLcy28k1KEHM52S8_DjXx0k8A-YAUDN4-A53l7ZXHwsw2A5-hEVn0VpWc-LlYquLfvCi8xXejjpA2wHsYoeDmKAzR7D5gDBMI4VeTk9oIexcG0vHl0YGto7yumvsRAAC-w0RQDP7DY2CPgHf8GLgdoqIkJ_tOvLQu1aELQD_S8TqamTmqZ8Sws5m3MKK3mu-Kh-9r83Nc8uWgXxVlEZykMeRspWcwPRz9uGrWI22Vci8d0MksMSAwCRYBXUrru5glSzhtUZIZewKwfZCch8zxqr2keeN4CrnI5jxnAncnw";

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
  const response = await api.post('/Stage',{
    headers:{
      "x-access-token":token,
    }
  })
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