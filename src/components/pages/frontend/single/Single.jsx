import React from "react";
import Headings from "../Headings";
import Footnote from "../Footnote";
import { imgPath } from "@/components/helpers/functions-general";
import { Clock, Dot, HandPlatter, Utensils } from "lucide-react";

const Single = () => {
  return (
    <>
      <Headings />

      <section className="bg-dark text-white">
        <div className="container">
          <div className="py-25">
            <img
              src={`${imgPath}/slider1.jpg`}
              alt=""
              className="h-[500px] w-full object-cover"
            />
            <div className="text-center py-10">
              <h1>Chicken Tinola</h1>
              <ul className="flex gap-5 mb-5 justify-center">
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
              <p className="max-w-[600px] mx-auto">
                This chicken tinola recipe highlights the rich flavors of Knorr
                Chicken Cubes and the distinct aroma of ginger. Make this
                version to soothe your soul.
              </p>

              <div className="grid grid-cols-[1.5fr_3fr] gap-10 max-w-[900px] mx-auto mt-10 text-left">
                <div>
                  <h3>Ingredients</h3>
                  {Array.from(Array(8).keys()).map((key) => (
                    <div className="flex gap-2">
                      <Dot />
                      <ul
                        className="grid grid-cols-[.3fr,_1fr] mb-2 basis-full"
                        key={key}
                      >
                        <li>
                          <span>1</span> tbsp
                        </li>
                        <li>cloves garlic, chopped</li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div>
                  <h3>Instructions</h3>
                  <div className="wrapper-instruction">
                    <h5>Step 1</h5>
                    <p>
                      Get a pot and bring it up to medium heat before pouring in
                      the oil. Drop in the onions, garlic and ginger and sauté
                      slowly for about 2 minutes or until you can smell the
                      lovely aroma.
                    </p>
                    <h5>Step 2</h5>
                    <p>
                      It’s time to drop in the chicken pieces and stir until it
                      turns white or light brown in color.
                    </p>
                    <h5>Step 3</h5>
                    <p>
                      Pour in the water and add your Knorr Chicken Broth cubes.
                      Bring this to a simmer until chicken is tender and cooked
                      through.
                    </p>
                    <h5>Step 4</h5>
                    <p>
                      You can now add your sayote or green papaya and cook until
                      tender.
                    </p>
                    <h5>Step 5</h5>
                    <p>
                      Dahon ng sili is added at the last stage to ensure leaves
                      (and nutrients) don’t dry up. Give this a minute then it
                      is done. Malunggay is also another healthy alternative
                      because it is packed with vitamins and minerals which are
                      good for nursing moms and kids as well.
                    </p>
                    <h5>Step 6</h5>
                    <p>
                      Enjoy this with patis and calamansi on the side. See the
                      faces of your whole family light up as you bring this to
                      the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footnote />
    </>
  );
};

export default Single;
