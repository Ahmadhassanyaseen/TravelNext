import React from "react";

const Card = ({
  imgSrc,
  location,
  days,
  people,
  title,
  subtitle,
  rating,
  description,
  price,
}) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-60">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full"></span>
          <div className="absolute bottom-0 left-0 flex text-sm text-white w-full">
            <p className="border flex-2 p-3 bg-black bg-opacity-50">
              <i className="fa-solid fa-location-dot"></i> {location}
            </p>
            <p className="border flex-1 p-3 bg-black bg-opacity-50">
              <i className="fa-solid fa-calendar"></i> {days}
            </p>
            <p className="border flex-1 p-3 bg-black bg-opacity-50">
              <i className="fa-solid fa-user"></i> {people}
            </p>
          </div>
        </div>
        <div className="p-4 text-left">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-sm">
              {"★".repeat(rating)}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">{description}</p>
          <div className="flex items-center justify-between mt-4">
            <button className="btn-shine">
              <span> Read More </span>
            </button>
          </div>
        </div>
        <div className="absolute top-4 left-[40%] bg-black bg-opacity-50 text-white text-sm p-3 rounded">
          {price}
        </div>
      </div>
    </div>
  );
};

export default Card;
