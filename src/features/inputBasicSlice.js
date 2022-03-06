import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputModel: [
    {
      label: "First name",
      type: "text",
      name: "firstName",
    },
    {
      label: "Last name",
      type: "text",
      name: "lastName",
    },
    {
      label: "Select gender",
      type: "select",
      name: "gender",
      selectModel: ["male", "female", "other"],
    },
    {
      label: "Age",
      type: "number",
      name: "age",
    },
  ],
  inputData: {},
  selectData: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleChangeText: (state, action) => {
      state.inputData = {
        ...state.inputData,
        [action.payload.target.name]: action.payload.target.value,
      };
    },
    handleChangeSelect: (state, action) => {
      state.selectData = action.payload.target.value;
    },
  },
});

export const { handleChangeText, handleChangeSelect } = inputSlice.actions;
export const inputModel = (state) => state.input.inputModel;
export const selectData = (state) => state.input.selectData;
export const inputData = (state) => state.input.inputData;
export default inputSlice.reducer;
