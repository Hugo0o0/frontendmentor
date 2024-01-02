import { getNetworkInfo } from "@/api/http-client";
import { NetworkInfo, NetworkSlice } from "@/utils/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initalState: NetworkSlice = {
  ip: "",
  lat: 0,
  lng: 0,
  location: "",
  timezone: "",
  isLoading: false,
  isp: "",
};

const networkSlice = createSlice({
  name: "network",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNetworkInfo.fulfilled,
      (state, action: PayloadAction<NetworkInfo>) => {
        state.isLoading = false;
        state.ip = action.payload.ip;
        state.lat = action.payload.location.lat;
        state.lng = action.payload.location.lng;
        state.location = `${action.payload.location.city}, ${action.payload.location.region} ${action.payload.location.postalCode}`;
        state.timezone = action.payload.location.timezone;
        state.isp = action.payload.as.name;
      }
    );

    builder.addCase(getNetworkInfo.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default networkSlice.reducer;
