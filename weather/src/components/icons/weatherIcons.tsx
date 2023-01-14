import {
  WiDayFog,
  WiDayRain,
  WiDaySnow,
  WiDaySprinkle,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiNightAltPartlyCloudy,
  WiNightClear,
  WiNightFog,
  WiNightRain,
  WiNightSnow,
  WiNightSprinkle,
} from "react-icons/wi";
import { RxBorderNone } from "react-icons/rx";
import { useAppSelector } from "../../redux/hooks";
import { weather } from "../../types/apiTypes";

type props = {
  code: number;
};
// 0>x freezing]
// 10>x>0 cold
// 20>x>10 cool
// 30>x>20 warm
// 40>x>30 hot
// x>40 very hot
// 25>x>15

export default function WeatherIcons({ code }: props) {
  const { isDay } = useAppSelector((state) => state.global);
  const { weather } = useAppSelector((state) => state.apiResoponse);
  const t = weather?.current_weather.temperature as number;
  if (isDay) {
    switch (code) {
      case 0:
      case 1:
      case 2:
        return <WiDaySunny />;
      case 3:
        return <WiDaySunnyOvercast />;
      case 45:
      case 48:
        return <WiDayFog />;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        return <WiDaySprinkle />;
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        return <WiDayRain />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 75:
      case 86:
        return <WiNightSnow />;
      default:
        return <RxBorderNone />;
    }
  }
  switch (code) {
    case 0:
    case 1:
    case 2:
      return <WiNightClear />;
    case 3:
      return <WiNightAltPartlyCloudy />;
    case 45:
    case 48:
      return <WiNightFog />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return <WiNightSprinkle />;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return <WiNightRain />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 75:
    case 86:
      return <WiNightSnow />;

    default:
      return <RxBorderNone />;
  }
}
