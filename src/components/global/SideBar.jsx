import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ setIsOpen, isOpen }) => {
  const menuLinks = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: "material-symbols:grid-view-outline-rounded",
    },
    {
      label: "Deals",
      link: "/deals",
      icon: "ph:currency-circle-dollar",
    },
    {
      label: "Activities",
      link: "/activities",
      icon: "material-symbols:date-range-outline-rounded",
    },
    {
      label: "Contacts",
      link: "/contacts",
      icon: "material-symbols:contacts-outline-rounded",
    },
    {
      label: "Products",
      link: "/products",
      icon: "mdi:box-outline",
    },
    {
      label: "Services",
      link: "/services",
      icon: "eva:shopping-bag-outline",
    },
  ];
  const [active, setActive] = useState({});
  // useEffect(() => {}, []);
  return (
    <aside
      className={`${
        isOpen ? "w-[300px]" : "w-[90px]"
      } border-r sticky top-0 left-0 h-screen shrink-0 transition-all`}
    >
      <header className="flex items-center justify-between p-5 border-b bg-primary text-white">
        {isOpen && (
          <h4 className="text-xl font-semibold">Stellar Aesthetics</h4>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-3xl rounded-full p-2 hover:bg-gray-500"
        >
          <Icon
            icon={
              isOpen
                ? "ic:baseline-keyboard-arrow-left"
                : "ic:baseline-keyboard-arrow-right"
            }
          />
        </button>
      </header>
      <nav className="px-4 py-5">
        <ul>
          {menuLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  to={item.link}
                  className="flex items-center gap-5 hover:bg-paper px-4 py-3 my-2 rounded"
                >
                  <Icon icon={item.icon} className="text-2xl" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
