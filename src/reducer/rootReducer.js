//here we combine all the reducers we have and pass them to the store

import changeTheNumber from "./IncreDecre";
import { combineReducers } from "redux"; //help us to combine more than one reducers

const reducers = combineReducers({
  changeTheNumber: changeTheNumber,
});
export default reducers;
