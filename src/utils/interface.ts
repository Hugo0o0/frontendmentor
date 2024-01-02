export interface NetworkSlice {
  ip: string;
  lat: number;
  lng: number;
  location: string;
  timezone: string;
  isLoading: boolean;
  isp: string;
}
export interface NetworkInfo {
  ip: string;
  location: {
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  as: {
    name: string;
  };
}
