import { Icon } from "leaflet";
import { Location } from "@/components/Icons";
import { Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import locationIcon from "@/assets/icon-location.svg";

const CustomMarker = () => {
  const { lat, lng, ip } = useSelector((state: RootState) => state.network);
  const map = useMap();

  map.setView([lat, lng], 13);

  const icon = new Icon({
    iconUrl: locationIcon,
    iconSize: [25, 25],
  });

  return (
    <Marker icon={icon} position={[lat, lng]}>
      <Popup>{ip}</Popup>
    </Marker>
  );
};

export default CustomMarker;
