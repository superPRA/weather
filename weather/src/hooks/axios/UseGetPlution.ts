import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAirPlution } from "../../redux/API/APIResponses";
import useAxios from "./useAxios";
import { airPlution } from "../../types/apiTypes";

export default function useGetPlution() {
  const { activeCity,options } = useAppSelector((state) => state.apiResoponse);
  const { latitude, longitude } = activeCity;
  const { plution } = options
  const dispatch = useAppDispatch();
  const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  url.searchParams.set("latitude", latitude.toString());
  url.searchParams.set("longitude", longitude.toString());
  url.searchParams.set("hourly", plution.hourly.join(","));
  const {loading,response} = useAxios({method:"get", url: url.href})
  dispatch(setAirPlution(response as airPlution))
  
  return loading;
}
