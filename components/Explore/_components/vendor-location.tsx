"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { EmptyMap } from "./empty-map.";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <Skeleton className="border bg-[#F1E9DB] flex flex-col justify-center gap-5 items-center map-styling rounded-lg my-10" />
  ),
});

export const VendorsLocation = () => {
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);

  const handleSetSelectedPlace = (place: google.maps.places.PlaceResult | null) => {
    setSelectedPlace(place);
  };

  return (
    <div className="my-10">
      <MapComponent
        selectedPlace={selectedPlace}
        setSelectedPlace={handleSetSelectedPlace}
      />
    </div>
  );
};

export default VendorsLocation;
