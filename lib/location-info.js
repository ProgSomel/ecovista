export const getLocationData = async (lat, lon) => {
  console.log(lat, lon);
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  console.log(location, lat, lon);
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getLocationLatLong(location);

  if (locationLatlong?.latitude && locationLatlong?.longitude) {
    const lat = locationLatlong.latitude;
    const lon = locationLatlong.longitude;

    return { lat, lon };
  }
};
