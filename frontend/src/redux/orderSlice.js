import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  readed: "",
  read: "",
  // amount: "",
};

export const orderSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    orderRedux: (state, action) => {
      //console.log(action);
      console.log(action.payload.data);
      // state.user = action.payload.data;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.readed = action.payload.data.readed;
      state.read = action.payload.data.read;
      // state.amount = action.payload.data.amount;
    },
  },
});

export const { orderRedux } = orderSlice.actions;

export default orderSlice.reducer;
