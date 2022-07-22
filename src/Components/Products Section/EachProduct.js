import React from "react";
import { useNavigate } from "react-router-dom";

const EachProduct = ({ item }) => {
  const { id, title, price, image, description, rating } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      class="border-2 border-[hsl(330,84%,75%)] bg-[#f2f2f2] rounded-xl transition ease-in-out delay-70 hover:-translate-1 hover:scale-105 duration-300 hover:shadow-lg"
    >
      <div className="m-3 border-2 border-[rgb(172,199,216)] bg-white rounded-lg">
        <img
          className="rounded-lg mx-auto p-3 h-[260px]"
          src={image}
          alt="..."
        />
      </div>
      <div class="px-4 py-2">
        <h5 class=" font-semibold text-2xl">
          {title.length > 20 ? title.slice(0, 20) + " ..." : title}
        </h5>
        <p>
          {description.length > 100
            ? description.slice(0, 110) + " ..."
            : description}
        </p>
        <p className=" text-xl mt-1">
          <span className="font-bold">Price:</span> {price}
        </p>
        <p className="my-1">
          <span className="font-bold">Rating:</span> {rating.rate} (
          {rating.count} Peoples)
        </p>
      </div>
    </div>
  );
};

export default EachProduct;
