import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { Link } from "react-router-dom";

const TopRating = () => {
  return (
    <section className="py-24 bg-dark ">
      <div className="container">
        <h2 className="text-white">Top Rated Recipes</h2>

        <div className="grid grid-container-top gap-3">
          {Array.from(Array(6).keys()).map((key) => (
            <div
              className={`grid-item relative h-full w-full bg-black group grid-name-top-${key} overflow-hidden`}
            >
              <img
                src={`${imgPath}/slider3.jpg`}
                alt=""
                className="group-hover:opacity-70 group-hover:scale-[1.5] group-hover:rotate-[10deg] transition-all h-full object-cover"
              />
              <div className="absolute -bottom-24 left-5 text-white opacity-0 group-hover:opacity-100 transition-all  group-hover:bottom-5">
                <ul className="flex text-sm gap-4 items-center">
                  <li>30min</li>
                  <li>4 servings</li>
                </ul>
                <h4 className="mb-2 font-light">Pork Sinigang</h4>

                <Link to="/" className="font-bold">
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRating;
