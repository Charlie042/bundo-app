"use client"

import { VendorsLocation } from "@/components/Explore/_components/vendor-location";
import { ExploreComp } from "@/components/Explore/explore-component"; 
import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function Explore() {
 
  return (
    <div className=" ">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||""}
      >
        
        <ExploreComp />
        <VendorsLocation />
      </APIProvider>
    </div>
  );
}
