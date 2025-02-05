import { MdStar,MdStarBorder,MdStarHalf } from "react-icons/md";


interface RatingStarsProps {
  rating: number;
}

export const StarRating = ({ rating }: RatingStarsProps) => {
  // Round down to nearest half-star
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <MdStar key={index} className="text-yellow-300 font-light" />
      ))}
      {/* Half star */}
      {halfStar && <MdStarHalf className="text-yellow-300" />}
      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <MdStar key={index} className="text-[#D4D4D4]" />
      ))}
    </div>
  );
};


