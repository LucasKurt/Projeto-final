import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(4.7);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="d-none"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => false ? setRating(ratingValue) : '' }
            />
            <FaStar
              className={"star"}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={50}
              onMouseEnter={() => false ? setHover(ratingValue) : '' }
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>The rating is <span>{rating}</span></p>
    </div>
  );
};

export default StarRating;