import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  selectData,
  handleChangeSelect,
  handleChangeText,
} from "../../../features/inputBasicSlice";
import { useSelector, useDispatch } from "react-redux";

const InputComponents = ({ model, handleChange }) => {
  const selectDataModel = useSelector(selectData);
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    dispatch(handleChangeSelect(event));
    dispatch(handleChangeText(event));
  };
  return (
    <Fragment>
      {model.type === "select" && (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-standard-label">
            {model.name}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name={model.name}
            value={selectDataModel}
            onChange={(event) => handleSelect(event)}
            label={model.name}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {model.selectModel?.map((model, index) => {
              return (
                <MenuItem value={model} key={++index}>
                  {model}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {(model.type === "text" || model.type === "number") && (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            type={model.type}
            label={model.label}
            name={model.name}
            variant="outlined"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Box>
      )}
    </Fragment>
  );
};

export default InputComponents;
