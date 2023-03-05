import { useState } from "react";
import Kanban from "../components/kanban/Kanban";
import EditKanban from "../components/kanban/EditKanban";
import Header from "../components/global/Header";

const Deals = () => {
  const [isKanBanEdit, setIsKanBanEdit] = useState(false);
  return (
    <>
      <Header title={"Deals"} />
      {isKanBanEdit ? (
        <EditKanban setIsKanBanEdit={setIsKanBanEdit} />
      ) : (
        <Kanban setIsKanBanEdit={setIsKanBanEdit} />
      )}
    </>
  );
};

export default Deals;
