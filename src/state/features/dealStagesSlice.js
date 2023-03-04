import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "stage-1",
      name: "requested",
      deals: 0,
      amount: 0,
    },
    {
      id: "stage-2",
      name: "to do",
      deals: 0,
      amount: 0,
    },
    {
      id: "stage-3",
      name: "in progress",
      deals: 0,
      amount: 0,
    },
    {
      id: "stage-4",
      name: "done",
      deals: 0,
      amount: 0,
    },
  ],
};

const dealStageSlice = createSlice({
  name: "dealStages",
  initialState,
  reducers: {
    addDealStage: (state, action) => {
      state.data.push(action.payload);
    },
    deleteDealStage: (state, action) => {
      const data = state.data.filter((item) => action.payload !== item.id);
      state.data = [...data];
    },
    updateDealStage: (state, action) => {
      state.data.forEach((item) => {
        if (item.id === action.payload.id) {
          action.payload.updateFeilds.forEach((field) => {
            item[field.name] = field.value;
          });
        }
      });
    },
  },
});

export const { addDealStage, deleteDealStage, updateDealStage } =
  dealStageSlice.actions;
export default dealStageSlice.reducer;
