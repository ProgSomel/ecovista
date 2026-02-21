import AQIComponent from "@/app/components/AQIComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

export default async function AQIPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
}
