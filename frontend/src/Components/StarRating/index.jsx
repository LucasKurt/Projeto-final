import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ nota, ratingStar, classe }) => {
  const [rating, setRating] = useState(nota);
  const [hover, setHover] = useState(null);

  return (
    <div className="d-flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="d-none"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => ratingStar ? setRating(ratingValue) : '' }
            />
            <FaStar
              className={classe}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#c0c0c2"}
              size={50}
              onMouseEnter={() => ratingStar ? setHover(ratingValue) : '' }
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p className="display-4 ml-2">{rating}</p>
    </div>
  );
};

export default StarRating;