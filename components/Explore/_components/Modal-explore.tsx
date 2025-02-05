import React, { useEffect, useState, useRef, useContext } from "react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchIcon from "@/public/svgs/search.svg";
import { modalSchema } from "./modal-schema";
import { useFormWithSchema } from "@/hooks/useFormWithSchema";
import { Controller } from "react-hook-form";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useFetchGetData, usePostData } from "@/hooks/useFetchData";
import { SliderProps } from "@/app/model/Navbar";
import { PlaceContext } from "../context/Place-context";
import { toast } from "sonner";


const Modal = ({ isOpen, setIsOpen }: SliderProps) => {
  const { setViewpoint } = useContext(PlaceContext);
  const {refetch} = useFetchGetData();
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useFormWithSchema(modalSchema, {
    defaultValues: {
      Address: "",
      BusinessName: "",
      image: "",
    },
  });
  const { mutate, isError, isPending } = usePostData();

  const places = useMapsLibrary("places");
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address", "place_id"],
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      const place = placeAutocomplete.getPlace();
      setSelectedPlace(place);
      setValue("Address", place.formatted_address || "");
    });
  }, [placeAutocomplete, setValue]);

  
  const postData = async (data: ModalApiProps) => {
    try {
      const response = await fetch(
        "https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage",
        {
          method: "POST",
          headers: {
            
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Request Failed:", error);
      throw error;
    }
  };

  
  const onSubmit = async (Modaldata: ModalDataProps) => {
    const formData: ModalApiProps = {
      id: selectedPlace?.place_id || "",
      lat: selectedPlace?.geometry?.location?.lat() ?? 0,
      long: selectedPlace?.geometry?.location?.lng() ?? 0,
      address: Modaldata.Address,
      businessName: Modaldata.BusinessName,
      businessProfilePicture: Modaldata.image,
    };

    try {
      const result = await postData(formData);
      refetch()
      setViewpoint(selectedPlace?.geometry?.viewport || null); 
      toast.success("Successful!",{
         description: "Your bussiness was added Successfully! 😁",
      })
      handleClose(); 
    } catch (error) {
      console.error("Failed to save:", error);
      toast.error("Failed!",{
        description: "Your business could not be added. Please try again."
      })
    }
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
      className="fixed right-0 top-20 max-w-[70%] lg:w-[500px] h-[550px] bg-white shadow-lg z-50 rounded-md"
    >
      <form
        onSubmit={handleSubmit(
          onSubmit as unknown as (data: {
            image?: string | undefined;
            Address: string;
            BusinessName: string;
          }) => void
        )}
        className="h-full flex flex-col"
      >
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
                    placeholder="Enter Address"
                    className="w-full p-3 border rounded-md pl-8 outline-primary bg-[#DEF2FB33]"
                  />
                  <p className="text-red-500 text-sm font-thin mt-2">
                    {errors.Address?.message}
                  </p>
                  <Image
                    src="/svgs/search.svg"
                    alt="Search Icon"
                    className="absolute left-2 top-3 w-5 h-5"
                    width={20}
                    height={20}
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
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Business Name"
                    className="w-full p-3 border rounded-md outline-primary bg-[#DEF2FB33]"
                  />
                  <p className="text-red-500 text-sm font-thin mt-2">
                    {errors.BusinessName?.message}
                  </p>
                </div>
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
