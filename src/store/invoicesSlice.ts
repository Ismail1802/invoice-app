import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../data/db.json";
import { InvoiceProps } from "../types";
import { RootState } from ".";

export type initialState = {
  data: InvoiceProps[];
};

const checkLocalStorage = () => {
  const dataL = localStorage.getItem("invoices");
  return dataL !== null ? JSON.parse(dataL) : data.invoices;
};

const initialState: initialState = {
  data: checkLocalStorage(),
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: initialState,
  reducers: {
    addInvoice(state, action) {
      state.data.push(action.payload);
    },
    deleteInvoice(state, action) {
      state.data = state.data.filter((inv) => inv.id !== action.payload);
    },
    statusHandler(state, action) {
      const currentInvoice = state.data.find(
        (inv) => inv.id === action.payload
      )!;
      currentInvoice.status = "paid";
    },
    updateInvoice(state, action) {
      const { id } = action.payload;
      state.data = state.data.map((inv) => {
        if (inv.id === id) {
          return action.payload;
        } else return inv;
      });
    },
  },
});

export const invoicesActions = invoicesSlice.actions;

export const allInvoices = (state: RootState) => state.invoices.data;

// create selector
export const selectFilteredInvoices = createSelector(
  [allInvoices, (_, options) => options],
  (data, options) => {
    let filteredInvoices = [];

    if (options.length === 0) {
      filteredInvoices = data;
    } else {
      filteredInvoices = data.filter((inv) => {
        return options.includes(inv.status);
      });
    }

    return filteredInvoices;
  }
);

export default invoicesSlice.reducer;
