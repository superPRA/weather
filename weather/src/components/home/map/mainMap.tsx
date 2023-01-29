import { MapContainer, TileLayer } from "react-leaflet";
import { useAppSelector } from "../../../redux/hooks";

type Props = {};

export default function MainMap({}: Props) {
  const { activeCity } = useAppSelector((state) => state.apiResoponse);
  const { loading } = useAppSelector((state) => state.global);
  // const { response } = useGetWeatherConditionMap();

  // const iconMarkup = <WeatherIcons code={1} />;

  return (
    <div className="relative w-full bg-red-200 h-96 rounded-3xl">
      <MapContainer
        className="h-full rounded-3xl"
        center={[activeCity.latitude, activeCity.longitude]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {response.map((item) => {
          
            return <Circle key={uuid()} center={[item.latitude,item.longitude]} radius={1000} color={item.weatherCode === 1?"white":item.weatherCode === 2?"black":item.weatherCode === 3?"red":"blue"}/>
          
        })} */}
      </MapContainer>
    </div>
  );
}
