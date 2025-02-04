import React, { createContext, useState, ReactNode } from "react";


interface PlaceContextType {
  viewpoint: google.maps.places.PlaceGeometry["viewport"] | null;
  setViewpoint: (
    viewpoint: google.maps.places.PlaceGeometry["viewport"] | null
  ) => void;
}


export const PlaceContext = createContext<PlaceContextType>({
  viewpoint: null,
  setViewpoint: () => {},
});


export const PlaceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [viewpoint, setViewpoint] = useState<
    google.maps.places.PlaceGeometry["viewport"] | null
  >(null);

  return (
    <PlaceContext.Provider value={{ viewpoint, setViewpoint }}>
      {children}
    </PlaceContext.Provider>
  );
};
