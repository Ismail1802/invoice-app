import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import themeReducer from "./themeSlice";
import modalReducer from "./modalSlice";
import invoicesReducer from "./invoicesSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    invoices: invoicesReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
