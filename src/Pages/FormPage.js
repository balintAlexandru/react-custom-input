import React from "react";
import InputComponent from "../Components/atom/inputBaicComponent/InputBasicComponent";
import {
  inputModel,
  handleChangeText,
  inputData,
} from "../features/inputBasicSlice";
import { useSelector, useDispatch } from "react-redux";

const FormPage = () => {
  const inputModelData = useSelector(inputModel);
  const model = useSelector(inputData);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(handleChangeText(event));
  };

  const showModel = (e) => {
    e.preventDefault();
    console.log(model);
  };
  return (
    <form
      onSubmit={(e) => {
        showModel(e);
      }}
    >
      {inputModelData?.map((model, index) => (
        <InputComponent key={index} model={model} handleChange={handleChange} />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default FormPage;
