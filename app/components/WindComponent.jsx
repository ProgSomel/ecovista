import { getWindData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

export default async function WindComponent({ lat, lon }) {
  const data = await getWindData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image src="/icon_wind.png" alt="wind icon" width={80} height={80} />
        <h3 className="feature-title">{data.speed} m/s</h3>
        <span className="feature-name">Direction {data.deg}°</span>
      </div>
    </Card>
  );
}
