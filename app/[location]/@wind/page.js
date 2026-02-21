import WindComponent from "@/app/components/WindComponent";
import React from "react";

export default async function WindPage({ params, searchParams }) {
  const { latitude, longitude } = await searchParams;
  return <WindComponent lat={latitude} lon={longitude} />;
}
