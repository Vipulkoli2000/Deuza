import { configureStore } from "@reduxjs/toolkit";

import sessionSlice from "./slices/sessionSlice";

const store = configureStore({
  reducer: {
    sessionSlice: sessionSlice,
  },
});

export default store;
