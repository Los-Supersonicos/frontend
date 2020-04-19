import axios from "axios";

export const getPoint = (lat, long) => {
  return `POINT (${lat} ${long})`;
};

export const getLatLong = async (address) => {
  const key = "AIzaSyC50wRXPH7ee92T9118G722gKyvaf8NFQw";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
  const response = await axios.get(url);
  const results = getLatLongResults(response);
  if (!results) return null;
  return results[0].geometry.location;
};

export const getLatLongResults = (response) => {
  if (response.status !== 200) return null;
  if (!response.data?.results.length) return null;
  return response.data.results;
};
