import { imgPath } from "@/components/helpers/functions-general";
import { BoxIcon, LayoutDashboard, RatioIcon, UtensilsCrossed } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Recipe",
      slug: "/admin/recipe",
      icon: <UtensilsCrossed size={16} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <BoxIcon size={16} />,
    },
    {
      title: "Level",
      slug: "/admin/level",
      icon: <RatioIcon size={16} />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src={`${imgPath}/logo.png`}
          alt=""
          className="w-[100px] h-[60px] mx-auto"
        />

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-alert opacity-100 text-white"
                    : ""
                } p-2 mb-2 border border-transparent rounded-md opacity-60 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-3  items-center"
                >
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
