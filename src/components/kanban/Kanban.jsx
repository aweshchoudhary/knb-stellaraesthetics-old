import Card from "../global/Card";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { reorderDeals, setStage } from "../../state/features/dealSlice";
import { updateDealStage } from "../../state/features/dealStagesSlice";
import { Icon } from "@iconify/react";
import AddDeal from "../global/AddDeal";
import Model from "../models/Model";
import { useState } from "react";
import Column from "./Column";
import Row from "./Row";

const Kanban = ({ setIsKanBanEdit }) => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deals.data);
  const dealStages = useSelector((state) => state.dealStages.data);
  const [editDealModelDisplay, setEditDealModelDisplay] = useState(false);
  const [addDealModelDisplay, setAddDealModelDisplay] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const stageArr = dealStages.filter(
        (item) => item.id === destination.droppableId
      );
      const stage = stageArr[0];
      const numOfDeals = stage.deals + 1;
      const amount = stage.amount + deals[source.index].value.value;

      const copiedItems = [...deals];
      const [removed] = copiedItems.splice(destination.index, 1);
      copiedItems.splice(source.index, 0, removed);
      dispatch(reorderDeals(copiedItems));

      dispatch(
        setStage({ id: deals[source.index].id, stage: destination.droppableId })
      );
      dispatch(
        updateDealStage({
          id: stage.id,
          updateFeilds: [
            { name: "deals", value: numOfDeals },
            { name: "amount", value: amount },
          ],
        })
      );
    } else {
      const copiedItems = [...deals];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch(reorderDeals(copiedItems));
    }
  };
  return (
    <>
      <Models
        editDealModelDisplay={editDealModelDisplay}
        setEditDealModelDisplay={setEditDealModelDisplay}
        addDealModelDisplay={addDealModelDisplay}
        setAddDealModelDisplay={setAddDealModelDisplay}
      />
      <section className="h-[60px] flex items-center justify-between px-5 py-3 border-b">
        <div>
          <button
            onClick={() => setAddDealModelDisplay(true)}
            className="btn-filled"
          >
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
      </section>
      <section className="h-[calc(100%-120px)] bg-paper">
        <div className="flex overflow-x-auto h-full">
          <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            {dealStages &&
              dealStages.map((stage, index) => {
                return (
                  <Column stage={stage} key={index}>
                    {deals.map((item, i) => {
                      return (
                        item?.stage === stage.id && (
                          <Row itemId={item.id} index={i} key={i}>
                            <Card
                              setEditDealModelDisplay={setEditDealModelDisplay}
                              data={item}
                            />
                          </Row>
                        )
                      );
                    })}
                  </Column>
                );
              })}
          </DragDropContext>
        </div>
      </section>
    </>
  );
};

const Models = ({
  editDealModelDisplay,
  setEditDealModelDisplay,
  addDealModelDisplay,
  setAddDealModelDisplay,
}) => {
  return (
    <>
      <Model
        title={"Add Deal"}
        isOpen={addDealModelDisplay}
        setIsOpen={setAddDealModelDisplay}
      >
        <AddDeal setIsOpen={setAddDealModelDisplay} />
      </Model>
      <Model
        title={"Edit Deal"}
        isOpen={editDealModelDisplay}
        setIsOpen={setEditDealModelDisplay}
      ></Model>
    </>
  );
};

export default Kanban;
