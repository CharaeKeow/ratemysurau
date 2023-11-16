import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

type StarRatingProps = {
  rating: number;
  handleRatingChange: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  handleRatingChange,
}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`h-6 w-6 ${
          i <= rating ? "text-yellow-500" : "text-gray-400"
        }`}
        onClick={() => handleRatingChange(i)}
      ></StarIcon>
    );
  }

  return <>{stars}</>;
};

export default StarRating;
