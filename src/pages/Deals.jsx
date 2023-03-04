import { Icon } from "@iconify/react";
import { useState } from "react";
import Kanban from "../components/kanban/Kanban";
import EditKanban from "../components/kanban/EditKanban";
import Model from "../components/models/Model";
import Header from "../components/global/Header";
import AddDeal from "../components/global/AddDeal";

const Deals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKanBanEdit, setIsKanBanEdit] = useState(false);

  function handleCancelKanBanEdit() {
    setIsKanBanEdit(false);
  }
  return (
    <>
      <Model isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddDeal setIsOpen={setIsOpen} />
      </Model>
      <Header title={"Deals"} />
      <section className="h-[60px] flex items-center justify-between px-5 py-3 border-b">
        {isKanBanEdit ? (
          <>
            <h3>Edit Stages</h3>
            <div className="flex items-center gap-2">
              <button className="btn-outlined" onClick={handleCancelKanBanEdit}>
                cancel
              </button>
              <button className="btn-filled">save</button>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <button onClick={() => setIsOpen(true)} className="btn-filled">
                <Icon icon={"uil:plus"} className="text-xl" />
                Deal
              </button>
            </div>
            <div>
              <div></div>
              <div>
                {/* <select
                  name="dnd-edit-menu"
                  className="border py-2 px-4"
                  id="dnd-edit-menu"
                >
                  <option
                    value="edit-menu"
                    className="flex items-center gap-2 py-2"
                  >
                    Edit Menu
                  </option>
                </select> */}
                <button
                  className="btn-filled"
                  onClick={() => setIsKanBanEdit(true)}
                >
                  edit
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      <section className="h-[calc(100%-120px)] bg-paper">
        {isKanBanEdit ? <EditKanban /> : <Kanban />}
      </section>
    </>
  );
};

export default Deals;
