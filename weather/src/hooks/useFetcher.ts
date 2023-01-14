import { setLoading } from "../redux/global/global";
import { useAppDispatch } from "../redux/hooks";
import useGetPlution from "./axios/UseGetPlution";
import useGetWeather from "./axios/useGetWeather";
import { useEffect } from "react"


export default function useFetcher(){
    const dispatch = useAppDispatch()
    const weather = useGetWeather()
    const plution = useGetPlution()
    useEffect(()=>{
        if(weather || plution){
            dispatch(setLoading(true))
        } else {
            dispatch(setLoading(false))
        }
    },[weather, plution])
}