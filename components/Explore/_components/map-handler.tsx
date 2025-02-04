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

    // Prioritize place.geometry.viewport, fall back to context viewpoint
    const viewport = place?.geometry?.viewport || viewpoint;

    if (viewport) {
      map.fitBounds(viewport);
    }
  }, [map, place, viewpoint]);

  return null;
};

export default React.memo(MapHandler);
