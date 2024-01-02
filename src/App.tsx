import styles from "./App.module.css";
import Search from "@/components/Search/Search";
import Map from "@/components/Map/Map";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { getIpAddress, getNetworkInfo } from "@/api/http-client";
import LoadingModal from "@/components/LoadingModal/LoadingModal";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getIpAddress().then((res) => {
      dispatch(getNetworkInfo(res));
    });
  }, []);

  return (
    <div className={styles.app}>
      <LoadingModal />
      <Search />
      <Map />
    </div>
  );
};

export default App;
