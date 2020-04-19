import axios from "axios";
// import { getPoint } from "@/geo";

axios.defaults.baseURL = "https://api.entretodos.com.ar";

function auth(token) {
  return {
    headers: {
      Authorization: `jwt ${token}`,
    },
  };
}

export const publications = {
  add: (publication, opts) => {
    const { type, description, location, active = true } = publication;
    const data = {
      type,
      description,
      location,
      active,
    };
    return axios.post("/publications/", data, {
      ...auth(opts.token),
    });
  },
  fetchAll: () => {
    return axios.get("/publications/");
  },
};
