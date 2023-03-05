import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "5234523",
      personName: "Awesh Khan",
      organization: "Stellar Aesthetics",
      title: "New Deal",
      value: {
        value: 1000,
        type: "inr",
      },
      stage: "stage-1",
      label: 12341234,
      email: {
        email: "aweshchoudhary7@gmail.com",
        type: "work",
      },
      phone: {
        phone: 9015077510,
        type: "work",
        prefix: "+91",
      },
    },
    {
      id: "52345",
      personName: "Awesh Choudhary",
      organization: "Stellar Aesthetics",
      title: "Stellar Aesthetics Deal",
      value: {
        value: 10000,
        type: "inr",
      },
      stage: "stage-1",
      label: 12341234,
      email: {
        email: "aweshchoudhary7@gmail.com",
        type: "work",
      },
      phone: {
        phone: 9015077510,
        type: "work",
        prefix: "+91",
      },
    },
  ],
};

const dealSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    addDeal: (state, action) => {
      state.data.push(action.payload);
    },
    deleteDeal: (state, action) => {
      const data = state.data.filter((item) => action.payload !== item.id);
      state.data = [...data];
    },
    setStage: (state, action) => {
      state.data.forEach((item) => {
        if (item.id === action.payload.id) {
          item.stage = action.payload.stage;
        }
      });
    },
    reorderDeals: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addDeal, deleteDeal, setStage, reorderDeals } =
  dealSlice.actions;
export default dealSlice.reducer;
