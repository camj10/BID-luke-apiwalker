import { useEffect, useState } from "react";

const useFetch = (url, id) => {
    const iden =[id];
    const[data, setData]= useState(null);
    const[error, setError]= useState(false);
    const[loading, setLoading]= useState(true);
    useEffect(()=>{
        const getData= async ()=>{
            try{
                const response= await fetch(url);
                const json = await response.json();
                setData(json)
                console.log(data)
                !loading && (data.detail === 'Not found'?setError(true):setError(false))
            } catch(error){
                setError(true);
            } finally{
                setLoading(false);
            }
        }
        getData();
    }, iden)
    return{ data, error, loading}
}
export default useFetch