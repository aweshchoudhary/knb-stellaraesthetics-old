import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleDarkMode,
  toggleMobileOpen,
} from "../../state/features/globalSlice";

const Header = ({ title }) => {
  const darkMode = useSelector((state) => state.global.darkMode);
  const picture = useSelector((state) => state.auth?.user?.profile?.picture);
  console.log(picture);
  const dispatch = useDispatch();

  const toggleThemeMode = () => dispatch(toggleDarkMode());
  return (
    <header className="h-[60px] px-5 border-b flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleMobileOpen())}
          className="btn text-2xl md:hidden block"
        >
          <Icon icon={"uil:bars"} />
        </button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="btn p-2 rounded-full text-2xl hover:bg-paper"
          onClick={toggleThemeMode}
        >
          <Icon
            icon={
              darkMode ? "ic:round-light-mode" : "material-symbols:dark-mode"
            }
          />
        </button>
        <Link className="block p-2 hover:bg-paper rounded-full">
          <Icon icon="basil:user-plus-outline" className="text-2xl" />
        </Link>
        <Link
          to="/user"
          className="rounded-full h-[50px] w-[50px] border uppercase"
        >
          {picture && (
            <img
              src={picture}
              className="w-full rounded-full h-full object-cover"
              width={100}
              height={100}
            />
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
