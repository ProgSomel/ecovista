import AQIComponent from "@/app/components/AQIComponent";
import React from "react";

export default async function AQIPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  return <AQIComponent lat={latitude} lon={longitude} />;
}
