import React, { useState } from "react";
import Image from "next/image";
interface AvatarProps {
  name?: string;
  size?: "small" | "medium" | "large";
  imageUrl?: string;
}

const sizeClasses = {
  small: "w-10 h-10 text-sm",
  medium: "w-16 h-16 text-lg",
  large: "w-24 h-24 text-2xl",
};

const Avatar: React.FC<AvatarProps> = ({ name, size = "medium", imageUrl }) => {
  
  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={`relative ${sizeClasses[size]} flex items-center justify-center rounded-full bg-[#34A853] text-white font-bold uppercase  overflow-hidden`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Avatar"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        ) : name ? (
          name.charAt(0)
        ) : (
          "?"
        )}
      </div>
    </div>
  );
};

export default Avatar;
