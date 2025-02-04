import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Avatar from "./avatar";
import { tag,locations} from "@/public/svgs";



const VendorCard = ({
  logo,
  name,
  distance,
  description,
  location,
  categories = [],
  ratings,
  onFavorite,
  onViewPage,
}: VendorCardProps) => {
  const [isLiked, setIsLiked] = useState(false)


  const handleClicked = ()=>{
    onFavorite();
    setIsLiked(true)
  }
  return (
    <div className="max-w-96 bg-[#FCFBF8] rounded-lg overflow-hidden shadow-sm border-[0.69px] border-[#D6EEDD]  p-6">
      <div className="flex justify-between items-start mb-4">
        {/* Logo and Favorite Section */}
        <div className="relative">
          <Avatar name={name} imageUrl={logo} />
        </div>
        {!isLiked ? (
          <button
            onClick={handleClicked}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="w-6 h-6 " />
          </button>
        ) : (
          <button onClick={() => setIsLiked(false)}>
            <FaHeart className="w-6 h-6 text-red-500" />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-3 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>

        {/* Distance Badge */}
       
          <div className="flex items-center gap-1 text-[10px] text-gray-600">
            <Image src="/images/locationMarker.webp" alt="location marker" width={20} height={20}/>
            <span>{distance} minutes away from you</span>
        </div>

        {/* Description */}
          <p className="text-foreground text-[12px]">{description}</p>

        {/* Location */}
        <div className="flex items-center gap-2 text-foreground">
          <div className="tag-icon">
            <Image
              src="/svgs/location.svg"
              alt="tag image"
              width={15}
              height={50}
              className="w-3"
            />
          </div>

          <span className="text-sm">{location}</span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <div className="tag-icon">
            <Image
              src="/svgs/tag.svg"
              alt="tag image"
              width={20}
              height={20}
              className="w-3"
            />
          </div>

          {categories.slice(0, 2).map((category, index) => (
            <span
              key={index}
              className="text-primary font-light text-sm hover:text-green-700"
            >
              {category}
              {index < 2 && " "}
            </span>
          ))}
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.floor(ratings.average)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {ratings.count} ratings and reviews
          </span>
        </div>

        {/* View Page Button */}
        <button
          onClick={onViewPage}
          className=" bg-primary text-base text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors my-4"
        >
          View Page
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
