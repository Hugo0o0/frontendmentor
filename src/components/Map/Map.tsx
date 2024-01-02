import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker/CustomMarker";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <MapContainer className={styles.map} center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker />
    </MapContainer>
  );
};

export default Map;
