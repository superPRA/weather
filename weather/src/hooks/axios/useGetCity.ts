import { city } from "../../types/apiTypes"
import useAxios from "./useAxios"


export default function useGetCity(city: string){
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search")
    url.searchParams.set("name", city)
    const {error,loading,response} = useAxios({method: "get", url: url.toString()})
    return{
        error,
        loading,
        response : response as city
    }
}