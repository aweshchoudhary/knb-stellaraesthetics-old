import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../state/features/globalSlice";

const Header = ({ title }) => {
  const darkMode = useSelector((state) => state.global.darkMode);
  const dispatch = useDispatch();

  const toggleThemeMode = () => dispatch(toggleDarkMode());
  return (
    <header className="h-[60px] px-5 border-b flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-2">
        <button className="btn text-2xl" onClick={toggleThemeMode}>
          <Icon
            icon={
              darkMode ? "ic:round-light-mode" : "material-symbols:dark-mode"
            }
          />
        </button>
        <Link className="block p-2 hover:bg-gray-100 rounded-full">
          <Icon icon="basil:user-plus-outline" className="text-2xl" />
        </Link>
        <div className="rounded-full h-full w-auto border uppercase p-2">
          ac
        </div>
      </div>
    </header>
  );
};

export default Header;
