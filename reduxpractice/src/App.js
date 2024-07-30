import "./App.css";
import CakeContainer from "./Components/Container/CakeContainer";
import { Provider } from "react-redux";
import { store } from "./Components/Store";
import IceCreamContainer from "./Components/Container/IceCreamContainer";
import HookCakeContainer from "./Components/Container/HookCakeContainer";
import NewContainer from "./Components/Container/NewContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <HookCakeContainer />
        <NewContainer />
      </div>
    </Provider>
  );
}

export default App;
