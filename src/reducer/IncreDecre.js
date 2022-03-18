//Its is the Defination of the act means What to do.

//this is one reducer ..we may have more reducers we gonna combine them in main rootReducer
const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;
