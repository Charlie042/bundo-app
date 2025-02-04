"use client";

import { useFetchGetData } from "@/hooks/useFetchData";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Avatar from "@/components/ui/avatar";
import { AutocompleteCustom } from "@/components/Explore/_components/AutocompleteCustom";
import Image from "next/image";
import { EmptyMap } from "./empty-map.";
import { useState } from "react";
import MapHandler from "./map-handler";
import { Skeleton } from "@/components/ui/skeleton";
import { LuRefreshCw } from "react-icons/lu";

export const VendorsLocation = () => {
  const { data, isLoading, isError, error,refetch } = useFetchGetData();
   const [selectedPlace, setSelectedPlace] =
     useState<google.maps.places.PlaceResult | null>(null);

     const [isRotate, setIsRotate] = useState(false);

     const handleRotate = () =>{
       setIsRotate(true);
       refetch()
       setTimeout(() => setIsRotate(false), 2000);
     }

  if (isLoading) return (
    <Skeleton className="border bg-[#F1E9DB] flex flex-col justify-center gap-5 items-center map-styling rounded-lg my-10" />
  );
  if (isError) return <p>Error: {error.message}</p>;

  console.log(data);

  const markers = Array.isArray(data)
    ? data.map((business) => ({
        lat: business.lat,
        lng: business.long,
        image: business.business_profile_picture,
        businessName: business.businessName,
      }))
    : [];

  return (
    <div className="my-10">
      {markers.length === 0 ? (
        <EmptyMap />
      ) : (
        <div className="overflow-hidden border-[#C9C2B6] border rounded-2xl map-styling">
          <div className=" relative">
            <button
              className="py-2 rounded-md bg-white absolute z-20 right-20 top-5 hover:bg-gray-100 "
              onClick={handleRotate}
            >
              <LuRefreshCw
                className={`w-10 h-5 ${isRotate ? "animate-spin" : ""}`}
              />
            </button>
          </div>

          <Map
            defaultCenter={{ lat: 6.5364553, lng: 3.317691999999999 }}
            defaultZoom={12}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
            disableDefaultUI
          >
            <div className="absolute top-5 left-5">
              {" "}
              <AutocompleteCustom onPlaceSelect={setSelectedPlace} />
            </div>

            {markers.map((marker, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
              >
                <Avatar name={marker.businessName} imageUrl={marker.image} />
              </AdvancedMarker>
            ))}
          </Map>
          <MapHandler place={selectedPlace} />
        </div>
      )}
    </div>
  );
};
