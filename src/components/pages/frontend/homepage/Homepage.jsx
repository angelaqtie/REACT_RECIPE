import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import { NavLink } from "react-router-dom";
import Headings from "../Headings";
import BannerSlider from "./BannerSlider";
import LatestRecipe from "./LatestRecipe";
import Footnote from "../Footnote";
import TopRating from "./TopRating";

const Homepage = () => {
  return (
    <>
      <Headings />
      <BannerSlider />
      <LatestRecipe />
      <TopRating />
      <Footnote />
    </>
  );
};

export default Homepage;
