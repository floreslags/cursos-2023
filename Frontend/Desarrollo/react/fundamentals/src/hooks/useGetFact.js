import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetFact = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading
  } = useQuery({
    queryKey: "cat",
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchData = () => {
    alert("Data refetched");
    refetch();
  };

  return { data, refetchData, isCatLoading };
};
