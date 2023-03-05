import { useEffect, useRef, useState } from "react";
import Card from "../global/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reorderDeals, setStage } from "../../state/features/dealSlice";
import { updateDealStage } from "../../state/features/dealStagesSlice";

const Kanban = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deals.data);
  const dealStages = useSelector((state) => state.dealStages.data);

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
    <div className="flex overflow-x-auto h-full">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        {dealStages &&
          dealStages.map((stage, index) => {
            return (
              <div
                className={
                  "border-r shrink-0 flex flex-col min-w-[293px] flex-1"
                }
                key={stage.id}
              >
                <header
                  className={
                    "border-b px-5 py-2 sticky top-0 left-0 text-white" +
                    " bg-primary"
                  }
                >
                  <h2 className="font-medium capitalize">{stage.name}</h2>
                  <p className="text-sm">
                    Rs{stage.amount} - {stage.deals} Deals
                  </p>
                </header>
                <div className="flex-1">
                  <Droppable droppableId={stage.id} key={stage.id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={`p-2 h-full ${
                            snapshot.isDraggingOver ? "bg-paper" : "bg-bg"
                          }`}
                        >
                          {deals.map((item, i) => {
                            return (
                              item?.stage === stage.id && (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={i}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <Card data={item} />
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              )
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
      </DragDropContext>
    </div>
  );
};

export default Kanban;
