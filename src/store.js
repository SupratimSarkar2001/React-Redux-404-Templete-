//here all the state of our reducers are saved  and we can access them from here to any other components in the app

import { createStore } from "redux";
import reducers from "./reducer/rootReducer";
const store = createStore(reducers);

export default store;
