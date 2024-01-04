import Input from "@/components/Input/Input";
import styles from "./Search.module.css";
import { Arrow } from "@/components/Icons";
import IpInfo from "@/components/IpInfo/IpInfo";
import { useState } from "react";
import { AppDispatch } from "@/state/store";
import { useDispatch } from "react-redux";
import { getNetworkInfo } from "@/api/http-client";
import { validateIpAddress } from "@/utils/validate-ip";

const Search = () => {
  const [ip, setIp] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (!validateIpAddress(ip)) return alert("Invalid IP Address");

    dispatch(getNetworkInfo(ip));
  };

  return (
    <div className={styles.search}>
      <h1 className={styles.search__title}>IP Adress Tracker</h1>

      <form
        className={styles.search__form}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Search for any Ip address or domain"
        />
        <button onClick={handleSearch} className={styles.search__button}>
          <Arrow />
        </button>
      </form>

      <IpInfo />
    </div>
  );
};

export default Search;
