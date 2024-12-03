import { imgPath } from "@/components/helpers/functions-general";
import {
  ArrowRightIcon,
  ChartBarStacked,
  Clock,
  HandPlatter,
  Utensils,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {Array.from(Array(4).keys()).map((key) => (
          <div className="w-full h-[calc(100vh-88px)] relative" key={key}>
            <img
              src={`${imgPath}/slider1.jpg`}
              alt=""
              className="w-full h-[110%] object-cover"
            />

            <div className="tint w-full h-[110%] bg-black bg-opacity-60 absolute top-0"></div>
            <div
              className="absolute top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px]
        -translate-y-1/2"
            >
              <h2 className="text-5xl">Chicken Tinola</h2>
              <ul className="flex gap-5 mb-5">
                <li className="flex gap-2 items-center">
                  <Clock /> 30mis
                </li>
                <li className="flex gap-2 items-center">
                  <Utensils /> 4 serving
                </li>
                <li className="flex gap-2 items-center">
                  <HandPlatter />
                  Chicken
                </li>
              </ul>
              <p className="mb-5">
                This chicken tinola recipe highlights the rich flavors of Knorr
                Chicken Cubes and the distinct aroma of ginger. Make this
                version to soothe your soul.
              </p>

              <Link
                to="/"
                className="flex gap-3 items-center hover:text-orange group transition-all font-bold"
              >
                View Full Recipe{" "}
                <ArrowRightIcon
                  size={18}
                  className="opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-orange "
                />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
