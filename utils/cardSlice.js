import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    iteams: [],
  },
  reducers: {
    addIteam: (state, action) => {
      state.iteams.push(action.payload);
    },
    removeIteam: (state) => {
      state.iteams.pop();
    },
    clearIteam: (state) => {
      state.iteams.length = 0;
    },
  },
});
export const { addIteam, removeIteam, clearIteam } = cardSlice.actions;
export default cardSlice.reducer;
