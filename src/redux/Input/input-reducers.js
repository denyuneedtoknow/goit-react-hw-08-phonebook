import { combineReducers } from "redux";

const initState = {
  name: "1",
  number: "2",
};

export const handleChange = (state = initState, action) => {
  switch (action.type) {
    case "input/nameChange":
      state = { ...state, name: action.payload.target.value };
      console.log(state);
      return state;
    case "input/numberChange":
      state = { ...state, number: action.payload.target.value };
      return state;
    default:
      return state;
  }
};

// export const inputReducer = combineReducers({
//   handleChange: handleChange,
// });
