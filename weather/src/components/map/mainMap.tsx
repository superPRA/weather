import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  Circle
} from "react-leaflet";
import { useAppSelector } from "../../redux/hooks";
import useGetWeatherConditionMap from "../../hooks/axios/useGetWeatherConditionMap";
import uuid from "react-uuid";

type Props = {};

export default function MainMap({}: Props) {
  const { activeCity } = useAppSelector((state) => state.apiResoponse);
  const { loading } = useAppSelector((state) => state.global);
  
  //  const {response} = useGetWeatherConditionMap({
  //     latitude: activeCity.latitude ,
  //     longitude: activeCity.longitude ,
  //     max_min: 0.05,
  //     step: 0.001,
  //   });
    

  return (
    <div className="relative w-full bg-red-200 h-96 rounded-3xl">
      <MapContainer
        className="h-full rounded-3xl"
        center={[activeCity.latitude, activeCity.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {response.map(item=>{
          return item.weatherCode === 2?<Rectangle bounds={[[item.latitude + 0.005, item.longitude + 0.005],[item.latitude + 0.005, item.longitude - 0.005],[item.latitude - 0.005, item.longitude + 0.005],[item.latitude - 0.005, item.longitude - 0.005]]} />:null
        })} */}
      </MapContainer>
    </div>
  );
}
