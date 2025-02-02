"use client"

import { Plus } from "lucide-react";
import Modal from "./_components/Modal-explore"
import { useState } from "react";
export const ExploreComp = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = ()=>{
        setIsOpen(prev => !prev)
        console.log("clicked")
    }
    return (
      <div className="flex max-md:flex-col justify-between mt-10 items-start gap-2 ">
        <h2 className="text-2xl">Explore Buisness</h2>
        <button
          onClick={handleModal}
          className="bg-primary px-10 py-3 text-white text-xs flex justify-center items-center rounded-lg gap-2"
        >
          <Plus /> Add Business
        </button>
        {isOpen && (
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
        )}
       <Modal isOpen={isOpen}setIsOpen={setIsOpen} />
      </div>
    );
}