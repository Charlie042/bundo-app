"use client"

import { VendorsLocation } from "@/components/Explore/_components/vendor-location";
import { ExploreComp } from "@/components/Explore/explore-component"; 
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Explore() {
  return (
    <div className="max-w-[1527px] mx-auto ">
      <APIProvider
        apiKey={
          process.env.GOOGLE_MAPS_API_KEY ||
          "AIzaSyAT2e0pEJTw05c58G5VKux66rTOfd5EZLg"}
          >
        <ExploreComp />
        <VendorsLocation />
      </APIProvider>
    </div>
  );
}
