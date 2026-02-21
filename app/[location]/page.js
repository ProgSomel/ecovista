import React from "react";
import LocationInfo from "../components/LocationInfo";

export default async function LocationPage({ params, searchParams }) {
  const { latitude, longitude } = await searchParams;

  return <LocationInfo lat={latitude} lon={longitude} />;
}
