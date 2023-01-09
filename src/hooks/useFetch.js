import { useState,useEffect } from "react"
export const useFetch = (url)=>{
    const [data,setData] = useState(null)
    const [Ispending,setIspending] = useState(false)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const controller  = new AbortController()
        const fetchData = async ()=>{
            setIspending(true)
            try{
                const res = await fetch(url,{signal:controller.signal})
                if(!res.ok){
                    throw new error(res.statusText)
                }
                const json = await  res.json()

                setIspending(false)
                setData(json)
                setError(null)

            }
            catch(err){
                if(err.name==="AbortError"){
                    console.log("The fetch was aborted")

                }
                else{
                    setIspending(false)
                    setError('couldd not fetch the data')

                }
                
            }
           

        }
        fetchData()
        return ()=>{
            controller.abort()
        }

    },[url,error]) // dependency array mein dal dia error ko
    return {data,Ispending,error}

}
