import { getAQIData } from "@/lib/weather-info";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const AQI_LABELS = {
  1: "Good",
  2: "Fair",
  3: "Moderate",
  4: "Poor",
  5: "Very Poor",
};

export default async function AQIComponent({ lat, lon }) {
  const { main, components } = await getAQIData(lat, lon);

  const items = [
    { label: "Air Quality Index", value: AQI_LABELS[main.aqi] },
    { label: "Carbon Monoxide", value: `${components.co} µg/m³` },
    { label: "Nitric Oxide", value: `${components.no} µg/m³` },
    { label: "Nitrogen Dioxide", value: `${components.no2} µg/m³` },
    { label: "Ozone", value: `${components.o3} µg/m³` },
    { label: "Sulfur Dioxide", value: `${components.so2} µg/m³` },
    { label: "PM2.5", value: `${components.pm2_5} µg/m³` },
    { label: "PM10", value: `${components.pm10} µg/m³` },
  ];

  return (
    <Card>
        <h6 className="feature-name">Air Pollution & Quality</h6>
        <div className="mt-3 space-y-2 lg:space-y-3">
          {items.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                <Image
                  className="max-w-4.5"
                  src="/icon_air_element.png"
                  alt="icon"
                  width={18}
                  height={18}
                />
                {label}
              </div>
              <span className="text-right text-sm text-white lg:text-base">
                {value}
              </span>
            </div>
          ))}
        </div>
    </Card>
  );
}
