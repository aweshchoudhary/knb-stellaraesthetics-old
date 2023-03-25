import { Icon } from "@iconify/react";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderStages,
  addDealStage,
} from "../../state/features/dealStagesSlice";

const EditKanban = ({ setIsKanBanEdit }) => {
  const dealStages = useSelector((state) => state.dealStages.data);
  const [currentStages, setCurrentStages] = useState(dealStages);
  const dispatch = useDispatch();
  const onDragComplete = (result) => {
    if (!result.destination) return;

    let arr = [...currentStages];
    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setCurrentStages(arr);
  };
  function addStage(index) {
    const stagesCopy = [...currentStages];
    stagesCopy.splice(index + 1, 0, {
      id: String(Date.now()),
      name: "new stage",
    });
    // state.data = stagesCopy;
    setCurrentStages(stagesCopy);
  }
  function handleKanBanSave() {
    dispatch(reorderStages(currentStages));
    setIsKanBanEdit(false);
  }
  function handleCancelKanBanEdit() {
    setIsKanBanEdit(false);
  }

  return (
    <>
      <section className="h-[60px] flex items-center justify-between px-5 py-3 border-b">
        <h3>Edit Stages</h3>
        <div className="flex items-center gap-2">
          <button className="btn-outlined" onClick={handleCancelKanBanEdit}>
            cancel
          </button>
          <button className="btn-filled" onClick={handleKanBanSave}>
            save
          </button>
        </div>
      </section>
      <section className="h-[calc(100%-120px)] bg-paper">
        <DragDropContext onDragEnd={onDragComplete}>
          <div className="overflow-x-auto h-full">
            <Droppable droppableId="drag-drop-list" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="flex overflow-x-auto h-full"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {currentStages.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="border-r shrink-0 relative bg-bg flex flex-col min-w-[293px] flex-1"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <header
                            {...provided.dragHandleProps}
                            className="p-4 hover:cursor-move bg-primary text-white"
                          >
                            <h2 className="text-xl font-semibold capitalize">
                              {item.name}
                            </h2>
                          </header>
                          <div className="p-5">
                            <div className="input-group">
                              <label htmlFor="name" className="mb-2 block">
                                Name
                              </label>
                              <input
                                type="text"
                                className="input"
                                value={item.name}
                                placeholder="Stage Name"
                              />
                            </div>
                            <div className="flex mt-5 gap-2">
                              <button className="btn-outlined py-1 px-3">
                                cancel
                              </button>
                              <button className="btn-filled py-1 px-3">
                                save
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => addStage(index)}
                            className="create-stage btn-filled bg-bg border-black w-[30px] p-0 h-[30px] rounded-full text-textColor flex items-center justify-center text-xl absolute top-0 z-10 -right-[15px]"
                          >
                            <Icon icon={"uil:plus"} />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </section>
    </>
  );
};

export default EditKanban;
