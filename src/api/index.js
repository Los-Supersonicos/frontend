import axios from "axios";
import { getPoint } from "@/geo";

axios.defaults.baseURL = "http://back.34.201.137.122.xip.io/api";

export const publications = {
  url: "/publications",
  add: (publication) => {
    const { type, description, lat, long, active = true } = publication;
    const location = getPoint(lat, long);
    return axios.post(url, type, description, location, active);
  },
};
