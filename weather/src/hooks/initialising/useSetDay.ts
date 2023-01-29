import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { daily, weather } from "../../types/apiTypes";
import { setDay } from "../../redux/global/global";
import { DateTime } from "luxon";

export default function useSetDay() {
  const { loading, isDay } = useAppSelector((state) => state.global);
  const dispatch = useDispatch();
  const { weather } = useAppSelector((state) => state.apiResoponse);
  if (!loading) {
    if (weather?.daily) {
      const { sunrise, sunset } = weather?.daily as daily;
      const now = DateTime.now();
      const sunriseHour = DateTime.fromISO(sunrise[0] as  string)
      const sunsetHour = DateTime.fromISO(sunset[0] as  string)
      if (now.toMillis() > sunriseHour.toMillis() && now.toMillis() < sunsetHour.toMillis()) {
        dispatch(setDay(true));
      } else {
        dispatch(setDay(false));
      }
    }
  }
}
