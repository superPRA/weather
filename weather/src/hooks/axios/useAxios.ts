import axios, { AxiosError, AxiosResponse, Method, } from "axios"
import { useState, useEffect } from "react"
import { airPlution, cityApiResponce, weather } from "../../types/apiTypes"

type props = {
    method: Method,
    url: string,
    body?: string | null,
}


export default function useAxios({method,url,body=null}: props){
    const [response, setResponse] =  useState<weather | airPlution>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | AxiosError>(null)
    url = url.replaceAll("%2C", ",")
    useEffect(()=>{
        setLoading(true)
        axios({method, url, data:body})
            .then(res=>setResponse(res.data))
            .catch(err=>setError(err))
            .finally(()=>setLoading(false))
            

    },[url,method,body])


    return {
        response,
        loading,
        error
    }
}