import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { daily, weather } from "../../types/apiTypes";
import { setDay } from "../../redux/global/global";

export default function useSetDay() {
  const { loading, isDay } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();
  const { weather } = useAppSelector((state) => state.apiResoponse);
  if (!loading) {
    if (weather?.daily) {
      const { sunrise, sunset } = weather?.daily as daily;
      const date = new Date();
      const hour = date.getHours();
      const sunriseHour = parseInt(sunrise[0].slice(11, 13));
      const sunseteHour = parseInt(sunset[0].slice(11, 13));
      if (hour > sunriseHour && hour < sunseteHour) {
        dispatch(setDay(true));
      } else {
        dispatch(setDay(false));
      }
    }
  }
}
