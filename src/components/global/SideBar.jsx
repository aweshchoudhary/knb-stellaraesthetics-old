import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMobileOpen } from "../../state/features/globalSlice";

const SideBar = ({ setIsOpen, isOpen }) => {
  const isMobileOpen = useSelector((state) => state.global.isMobileOpen);
  const dispatch = useDispatch();
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
  return (
    <aside
      className={`${isOpen ? "w-[250px]" : "md:w-[90px] w-[300px]"} ${
        isMobileOpen ? "left-0" : "md:left-0 -left-full"
      } border-r md:sticky absolute bg-bg z-50 top-0 left-0 h-screen shrink-0 transition-all`}
    >
      <header
        className={`${
          isOpen ? "gap-2" : "gap-0"
        } flex items-center justify-between p-5 border-b bg-primary text-white`}
      >
        {isOpen && (
          <h4 className="text-lg font-semibold">Stellar Aesthetics</h4>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl md:block hidden rounded-full m-0 p-1 hover:bg-slate-800"
        >
          <Icon
            icon={
              isOpen
                ? "ic:baseline-keyboard-arrow-left"
                : "ic:baseline-keyboard-arrow-right"
            }
          />
        </button>
        <button
          onClick={() => dispatch(toggleMobileOpen())}
          className="md:hidden block"
        >
          <Icon icon={"uil:times"} className="text-2xl" />
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
