import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import dealSlice from "./features/dealSlice";
import dealStagesSlice from "./features/dealStagesSlice";
import globalSlice from "./features/globalSlice";
const store = configureStore({
  reducer: {
    deals: dealSlice,
    dealStages: dealStagesSlice,
    global: globalSlice,
    auth: authSlice,
  },
});

export default store;
