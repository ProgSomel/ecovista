import WindComponent from "@/app/components/WindComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

export default async function WindPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;

  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
}
