import { useMap } from "@vis.gl/react-google-maps";
import React, { useContext, useEffect } from "react";
import { PlaceContext } from "../context/Place-context";

interface Props {
  place: google.maps.places.PlaceResult | null;
}

const MapHandler = ({ place }: Props) => {
  const map = useMap();
  const { viewpoint } = useContext(PlaceContext);

  useEffect(() => {
    if (!map) return;

    
    const viewport = place?.geometry?.viewport || viewpoint;

    if (viewport) {
      map.fitBounds(viewport);
    }
  }, [map, place, viewpoint]);

  return null;
};

export default React.memo(MapHandler);
