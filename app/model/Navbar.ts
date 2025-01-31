import { Dispatch, SetStateAction } from "react";

export interface SliderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}