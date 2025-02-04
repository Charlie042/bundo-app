"use client"

import { VendorsLocation } from "@/components/Explore/_components/vendor-location";
import { ExploreComp } from "@/components/Explore/explore-component"; 
import { APIProvider } from "@vis.gl/react-google-maps";
import { PlaceProvider } from "@/components/Explore/context/Place-context";
import { useState } from "react";

export default function Explore() {
 const [selectedPlace, setSelectedPlace] =
   useState<google.maps.places.PlaceResult | null>(null);
  return (
    <div className=" ">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <PlaceProvider>
          <ExploreComp />
          <VendorsLocation />
        </PlaceProvider>
      </APIProvider>
    </div>
  );
}
