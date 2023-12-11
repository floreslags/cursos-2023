import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Module10 = () => {
  const client = new QueryClient({defaultOptions:{
    queries:{
        refetchOnWindowFocus:true
    }
  }});

  const CatFact = ()=>{
    const {data,isLoading,error,refetch} = useQuery({
        queryKey:["cat"],
        queryFn:()=>{
            return Axios.get("https://catfact.ninja/fact")
            .then((res)=>res.data);
        }
    });

    if(isLoading) return <h4>Is Loading</h4>
    if(error) return <h4>There was an error</h4>

    return(
        <>
            <h3>CatFact</h3>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update data</button>
        </>
    );


  }

  return (
    <div>
      <h2>Module 10 - React Query</h2>
      <QueryClientProvider client={client}>
        <CatFact/>
      </QueryClientProvider>
    </div>
  );
};
