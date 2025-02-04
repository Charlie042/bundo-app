import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface PlaceContextType {
  viewpoint: google.maps.places.PlaceGeometry["viewport"] | null;
  setViewpoint: (
    viewpoint: google.maps.places.PlaceGeometry["viewport"] | null
  ) => void;
}

// Create the context with a default value
export const PlaceContext = createContext<PlaceContextType>({
  viewpoint: null,
  setViewpoint: () => {},
});

// Create a provider component
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
