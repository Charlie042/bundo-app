"use client";

import { useFetchGetData } from "@/hooks/useFetchData";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Avatar from "@/components/ui/avatar";
import { AutocompleteCustom } from "@/components/Explore/_components/AutocompleteCustom";
import { EmptyMap } from "./empty-map.";
import { useEffect, useState } from "react";
import MapHandler from "./map-handler";
import { LuRefreshCw } from "react-icons/lu";


export interface MapComponentProps {
  selectedPlace: google.maps.places.PlaceResult | null;
  setSelectedPlace: (place: google.maps.places.PlaceResult | null) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  selectedPlace,
  setSelectedPlace,
}) => {
  const { data, isLoading, isError, error, refetch } = useFetchGetData();
  const [isRotate, setIsRotate] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRotate = () => {
    setIsRotate(true);
    refetch();
    setTimeout(() => setIsRotate(false), 2000);
  };

  if (!isMounted) {
    return null;
  }

  if (isError) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50">
        Error: {error?.message || "Failed to load vendor locations"}
      </div>
    );
  }

  const markers = Array.isArray(data)
    ? data
        .filter(
          (business) =>
            typeof business.lat === "number" &&
            typeof business.long === "number" &&
            !isNaN(business.lat) &&
            !isNaN(business.long)
        )
        .map((business) => ({
          lat: business.lat,
          lng: business.long,
          image: business.business_profile_picture || "",
          businessName: business.businessName || "Unknown",
        }))
    : [];

  if (markers.length === 0 && !isLoading) {
    return <EmptyMap />;
  }

  return (
    <div className="overflow-hidden border-[#C9C2B6] border rounded-2xl map-styling">
      <div className="relative">
        <button
          className="py-2 px-4 rounded-md bg-white absolute z-20 right-20 top-5 hover:bg-gray-100"
          onClick={handleRotate}
        >
          <LuRefreshCw
            className={`w-6 h-6 ${isRotate ? "animate-spin" : ""}`}
          />
        </button>
      </div>

      <Map
        defaultCenter={
          markers.length > 0
            ? { lat: markers[0].lat, lng: markers[0].lng }
            : { lat: 6.5364553, lng: 3.317691999999999 }
        }
        defaultZoom={12}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
        disableDefaultUI
      >
        <div className="absolute top-5 left-5">
          <AutocompleteCustom onPlaceSelect={setSelectedPlace} />
        </div>

        {markers.map((marker, index) => (
          <AdvancedMarker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            <Avatar
              name={marker.businessName || "Unknown"}
              imageUrl={marker.image}
            />
          </AdvancedMarker>
        ))}
      </Map>
      <MapHandler place={selectedPlace} />
    </div>
  );
};

export default MapComponent;
