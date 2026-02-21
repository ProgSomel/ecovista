import TemperatureComponent from "@/app/components/TemperatureComponent";
import React from "react";

export default async function TemperaturePage({ params, searchParams }) {
  const { latitude, longitude } = await searchParams;
  return <TemperatureComponent lat={latitude} lon={longitude} />;
}
