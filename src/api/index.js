import axios from "axios";
// import { getPoint } from "@/geo";

axios.defaults.baseURL = "http://back.34.201.137.122.xip.io/api";

export const publications = {
  add: (publication) => {
    const { type, description, location, active = true } = publication;
    const data = {
      type,
      description,
      location,
      active,
    };
    return axios.post("/publications/", data);
  },
};
