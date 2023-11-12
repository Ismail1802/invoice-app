import { createSlice } from "@reduxjs/toolkit";

const initialState = { newInvoice: false, editInvoice: false };

const modalsSlice = createSlice({
  name: "modals",
  initialState: initialState,
  reducers: {
    newInvoiceHandler(state) {
      state.newInvoice = !state.newInvoice;
    },
    editInoivceHandler(state) {
      state.editInvoice = !state.editInvoice;
    },
    closeAllModalsHandler() {
      return initialState;
    },
  },
});

export const modalsActions = modalsSlice.actions;

export default modalsSlice.reducer;
