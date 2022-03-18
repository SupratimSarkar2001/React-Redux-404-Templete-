import logo from "./logo.svg";
import "./App.css";

//inoreder to use oure redux store we need this following imports
import { decNumber } from "./action";
import { incNumber } from "./action";
import { useSelector, useDispatch } from "react-redux";
function App() {
  //inorder to access the state in our redux store we gonna use the useSelector.
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  //and in order to use the actions we gonna use the useDispatch.
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          <a
            className="minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input type="text" className="num" value={changeTheNumber} />
          <a
            className="plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
