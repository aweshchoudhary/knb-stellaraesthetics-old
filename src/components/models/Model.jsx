import { Icon } from "@iconify/react";

const Model = ({ children, isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <>
        <div className="lg:w-1/2 md:w-[70%] sm:w-4/5 w-full h-screen fixed bg-bg z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <header className="bg-primary text-white flex items-center justify-between h-[10%] py-3 px-5">
            <h4 className="title text-2xl font-semibold">Add Deal</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-500 p-2 rounded-full"
            >
              <Icon icon={"uil:times"} className="text-3xl" />
            </button>
          </header>
          {children}
        </div>
        <div className="black-screen fixed inset-0 h-full w-full bg-black z-40 opacity-40"></div>
      </>
    )
  );
};

export default Model;
