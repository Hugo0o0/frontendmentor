import { NetworkInfo } from "@/utils/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIpAddress = async (): Promise<string> => {
  const response = await axios.get("https://api.ipify.org/?format=json");
  return response.data.ip;
};

export const getNetworkInfo = createAsyncThunk(
  "network/getNetworkInfo",
  async (ip: string): Promise<NetworkInfo> => {
    const response = await axios.get(
      "https://geo.ipify.org/api/v2/country,city",
      {
        params: {
          apiKey: import.meta.env.VITE_API_KEY,
          ipAddress: ip,
        },
      }
    );

    return response.data;
  }
);
