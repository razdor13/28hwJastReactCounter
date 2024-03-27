import logger from "redux-logger";
import counterSlice from "./slices/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
      counter : counterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
  
  