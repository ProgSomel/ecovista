import WeatherComponent from "@/app/components/WeatherComponent";
import React from "react";

export default async function WeatherPage({ params, searchParams }) {
  const { latitude, longitude } = await searchParams;
  return <WeatherComponent lat={latitude} lon={longitude} />;
}
