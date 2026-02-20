import { data } from "../../data/location-data";

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase(),
  );

  return found || {};
}

export { getLocationByName, getLocations };
