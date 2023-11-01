import { useState, useEffect } from 'react';

export const useFetch = (url)=>{
    // Control de datos con  'useState'
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    // useEffect

    useEffect(()=>{

        const getData = async (url)=>{

            try {
                let res = await fetch(url);

                // eslint-disable-next-line no-throw-literal
                if(!res.ok) throw {err:true,status:res.status,statusText:!res.statusText?'Ocurrió un error':res.statusText};
                
                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({err:false});

            } catch (err) {
                setIsPending(true);
                setError(err);
                
            }

        }

        getData(url);
    },[url])

    return {data,isPending,error}
}

