import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Avatar from "./avatar";
import { StarRating } from "./star-rating";

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
  const [isLiked, setIsLiked] = useState(false);

  const handleClicked = () => {
    onFavorite();
    setIsLiked(true);
  };

  return (
    <div className="flex flex-col max-w-96 h-[53vh] bg-[#FCFBF8] rounded-lg overflow-hidden shadow-sm border-b-[0.69px] border-[#D6EEDD] py-7 px-3">

      {/* Top section with logo and favorite */}
      
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          <Avatar name={name} imageUrl={logo} />
        </div>
        {!isLiked ? (
          <button
            onClick={handleClicked}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="w-6 h-6 font-semibold text-red-400 hover:text-red-500" />
          </button>
        ) : (
          <button onClick={() => setIsLiked(false)}>
            <FaHeart className="w-6 h-6 text-red-500 font-semibold" />
          </button>
        )}
      </div>

      {/* Content section*/}
      <div className="flex-grow flex flex-col gap-7 my-7 overflow-y-auto">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>

          <div className="flex items-center gap-2 text-[12px] text-[#302F2C]">
            <Image
              src="/images/locationMarker.webp"
              alt="location marker"
              width={20}
              height={20}
            />
            <span>{distance} minutes away from you</span>
          </div>

          <p className="text-[#504E49] font-extralight text-[15px] leading-1 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-2 text-foreground">
            <div className="tag-icon">
              <Image
                src="/svgs/location.svg"
                alt="tag image"
                width={15}
                height={50}
                className="w-3"
              />
            </div>
            <span className="text-base text-[15px] font-extralight text-[#333333]">
              {location}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="tag-icon">
              <Image
                src="/svgs/tag.svg"
                alt="tag image"
                width={20}
                height={20}
                className="w-4"
              />
            </div>
            {categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="text-primary underline font-light text-sm hover:text-green-700 text-[15px] line-clamp-1"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              <StarRating rating={ratings} />
            </div>
            <span className="text-sm text-gray-600">
              {ratings} ratings and reviews
            </span>
          </div>
        </div>
      </div>

      {/* Button section */}
      <div className="mt-auto">
        <button
          onClick={onViewPage}
          className="bg-primary text-base text-white py-2 px-10 rounded-lg hover:bg-green-700 transition-colors w-full"
        >
          View Page
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
