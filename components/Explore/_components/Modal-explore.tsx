import React, { useEffect, useState, useRef } from "react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion"; // Fixed incorrect import from motion/react
import Image from "next/image";
import SearchIcon from "@/public/svgs/search.svg";
import { modalSchema } from "./modal-schema";
import { useFormWithSchema } from "@/hooks/useFormWithSchema";
import { Controller } from "react-hook-form";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { usePostData } from "@/hooks/useFetchData";




const Modal = ({ isOpen, setIsOpen }: SliderProps) => {
  const { handleSubmit, control, setValue, reset } = useFormWithSchema(
    modalSchema,
    {
      defaultValues: {
        Address: "",
        BusinessName: "",
        image: "",
      },
    }
  );
  const mutation = usePostData()

  // Add Places library hook
  const places = useMapsLibrary("places");
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  // Initialize Places Autocomplete
  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);
  }, [places]);

  // Handle place selection
  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      const place = placeAutocomplete.getPlace();
      setSelectedPlace(place)
      console.log(place.geometry)
      setValue("Address", place.formatted_address || "");
    });
  }, [placeAutocomplete, setValue]);

  const onSubmit = (Modaldata:ModalDataProps) => {
    const formData: ModalApiProps = {
      id: "c854b059-23a0-4161-88e1-ea66017eb32e",
      lat: selectedPlace?.geometry?.location?.lat() ?? 0,
      long: selectedPlace?.geometry?.location?.lng() ?? 0,
      address: Modaldata.Address,
      businessName: Modaldata.BusinessName,
      businessProfilePicture: Modaldata.image,
    };
    console.log("Form Data:", formData);
    mutation.mutate(formData,{
      onSuccess: ()=>{
        console.log("bad Ass!!")
      },
      onError:()=>{
        console.log("you can do it!")
      }
    })
  };

  const handleClose = () => {
    setIsOpen(false);
    reset(); 
  };

  const [xValue, setXValue] = useState("-50%");

  useEffect(() => {
    const updateXValue = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setXValue("-50%");
      } else if (width >= 768) {
        setXValue("-35%");
      } else {
        setXValue("0%");
      }
    };

    updateXValue();
    window.addEventListener("resize", updateXValue);

    return () => window.removeEventListener("resize", updateXValue);
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? xValue : "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed right-0 top-20 w-[500px] h-[550px] bg-white shadow-lg z-50 rounded-md"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col">
        <div className="relative p-6 shadow-lg">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4"
          >
            <CircleX className="w-5 h-5 text-primary transition" />
          </button>
        </div>

        <h2 className="text-xl px-6 py-4">Add New Business</h2>
        <div className="px-6 flex-1 overflow-y-auto mt-5">
          <div className="mb-4">
            <label className="block text-sm font-extralight text-[#504E49] mb-2">
              Enter Address
            </label>
            <Controller
              name="Address"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    ref={inputRef}
                    type="text"
                    placeholder="21b Joy Avenue, Ajao Estate"
                    className="w-full p-3 border rounded-md pl-8 outline-primary bg-[#DEF2FB33]"
                  />
                  <Image
                    src={SearchIcon}
                    alt="Search Icon"
                    className="absolute left-2 top-3 w-5 h-5"
                  />
                </div>
              )}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-extralight text-[#504E49] mb-2">
              Business Name
            </label>
            <Controller
              name="BusinessName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Hair Ventures"
                  className="w-full p-3 border rounded-md outline-primary bg-[#DEF2FB33]"
                />
              )}
            />
          </div>

          <button
            type="button"
            className="w-full bg-primary font-light text-white rounded-md p-3 mb-4 flex items-center justify-center hover:bg-green-600 transition"
          >
            <span className="mr-2">+</span>
            Add Address
          </button>

          <div className="mb-4">
            <label className="block text-sm font-extralight text-[#504E49] mb-2">
              Business Profile Picture
            </label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Image Link"
                  className="w-full p-2 border rounded-md outline-primary bg-[#DEF2FB33]"
                />
              )}
            />
          </div>
        </div>

        <div className="p-6">
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-md p-3 hover:bg-green-600 transition"
          >
            Save Business
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Modal;
