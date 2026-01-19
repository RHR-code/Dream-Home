import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaRegHeart,
  FaImages,
  FaVideo,
} from "react-icons/fa";
import { MdCompare } from "react-icons/md";

const HomeCard = ({ home }) => {
  //   const [isFavorite, setIsFavorite] = useState(false);

  // Sample data - you can pass your homeData as props
  const {
    title,
    location,
    address,
    bathrooms,
    bedrooms,
    areaSqFt,
    image,
    price,
  } = home;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden font-sans">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {/* Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="bg-green-500 text-white px-3 py-2 rounded-md shadow-md">
            <FaImages className="text-xl" />
          </div>
          <div className="bg-red-500 text-white px-3 py-2 rounded-md shadow-md">
            <FaVideo className="text-xl" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>

        {/* Address */}
        <div className="flex items-start gap-2 mb-2">
          <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-600">{address}</p>
        </div>

        {/* Added Date */}
        {/* <p className="text-xs text-gray-500 mb-4">
          Added: {homeData.addedDate}
        </p> */}

        {/* Property Details */}
        <div className="flex items-center gap-4 mb-4 text-gray-700">
          <div className="flex items-center gap-1.5">
            <FaBed className="text-purple-600" />
            <span className="text-sm font-medium">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaBath className="text-purple-600" />
            <span className="text-sm font-medium">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaRulerCombined className="text-purple-600" />
            <span className="text-sm font-medium">{areaSqFt} sq ft</span>
          </div>
        </div>

        {/* Agent and Price */}
        <div className="flex items-center justify-between mb-4">
          {/* <div className="flex items-center gap-2">
            <img
              src={homeData.agent.avatar}
              alt={homeData.agent.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              {homeData.agent.name}
            </span>
          </div> */}
          <div>
            <Link
              href={`/all-homes/${home._id}`}
              className="btn btn-primary btn-outline"
            >
              View Details
            </Link>
          </div>
          <div className="text-2xl font-bold text-purple-600">
            ${price.toLocaleString()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          {/* <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            {isFavorite ? (
              <FaHeart className="text-purple-600" />
            ) : (
              <FaRegHeart />
            )}
            <span>Favourite</span>
          </button> */}
          {/* <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <MdCompare className="text-lg" />
            <span>Compare</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <FaImages />
            <span>Images</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <FaVideo />
            <span>Videos</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
