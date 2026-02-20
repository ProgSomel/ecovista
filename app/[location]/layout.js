import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista - Sustainable Living",
  description:
    "One place Dashboard for Eco Information and Sustainable Living Practices",
};

export default function LocationLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        alt="EcoVista Logo"
        width={700}
        height={1200}
        className="bg-img"
      />
      <main className="z-50! w-full">
        <div className="container">
          <div
            className="grid grid-cols-12 gap-y-8
            py-16 lg:gap-8 2xl:gap-20 2xl:py-20"
          >
            {children}
            {aqi}
            {temperature}
            {weather}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
