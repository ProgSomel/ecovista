import { getWeatherData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

export default async function WeatherComponent({ lat, lon }) {
  const data = await getWeatherData(lat, lon);

  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          src="/icon_rain.png"
          alt={data.description}
          width={80}
          height={80}
        />
        <h3 class="feature-title">{data?.main}</h3>
        <span class="feature-name">{data?.description}</span>
      </div>
    </Card>
  );
}
