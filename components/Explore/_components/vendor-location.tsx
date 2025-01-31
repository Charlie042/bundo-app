"use client";

import { useFetchGetData } from "@/hooks/useFetchData";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Avatar from "@/components/ui/avatar";
import { marker } from "@/public/svgs";
import { EmptyMap } from "./empty-map.";
export const VendorsLocation = () => {
  const { data, isLoading, isError, error } = useFetchGetData();

  if (isLoading) return <p>Loading...</p>;
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
        <EmptyMap/>
      ) : (
        <div className="overflow-hidden border-[#C9C2B6] border rounded-2xl map-styling">
          <Map
            defaultCenter={{ lat: 6.5364553, lng: 3.317691999999999 }}
            defaultZoom={12}
            mapId="TRYING_ID"
          >
            {markers.map((marker, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
              >
                <Avatar name={marker.businessName} imageUrl={marker.image} />
              </AdvancedMarker>
            ))}
          </Map>
        </div>
      )}
    </div>
  );
};
