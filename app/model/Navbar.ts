import { Dispatch, SetStateAction } from "react";

export interface SliderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // selectedPlace: google.maps.places.PlaceResult | null;
  // setSelectedPlace: Dispatch<SetStateAction<google.maps.places.PlaceResult | null>>
}