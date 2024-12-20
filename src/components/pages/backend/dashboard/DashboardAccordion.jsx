import React from "react";
import { ChevronDown, Dot } from "lucide-react";
import { getFoodByCategory } from "./function";
import IconNoData from "../partials/IconNoData";

const DashboardAccordion = ({ item, dataFood }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const foodItem = getFoodByCategory(item.category_aid, dataFood);

  // const getCardDetails = menus.filter(
  //   (item) => item.menu_category === filterby
  // );

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="accordion mb-2">
      <div
        className="accordion-header p-2 flex justify-between bg-secondary rounded-t-md cursor-pointer"
        onClick={handleToggleOpen}
      >
        <h6 className="mb-0">{item.category_title}</h6>
        <ChevronDown
          className={`transition-all ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`accordion-body  border border-line rounded-b-md border-t-0 overflow-hidden h-full transition-all ${
          isOpen ? "max-h-[600px]" : "max-h-[0px]"
        }`}
      >
        <ul className="space-y-3 px-2 py-4">
          {/* {foodItem?.length == 0 && <IconNoData />}
          {foodItem?.length > 0 &&} */}
          {foodItem.map((item, key) => (
            <li className="flex items-center" key={key}>
              <Dot
                size={30}
                className={`${
                  item.level_title === "Easy" ? "text-success" : ""
                } : ${
                  item.level_title === "Moderate" ? "text-[#8884d8]" : ""
                } :  ${item.level_title === "Difficult" ? "text-alert" : ""}`}
              />
              {item.recipe_title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAccordion;
