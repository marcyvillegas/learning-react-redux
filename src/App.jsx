import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HookIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        {/* cake is a state is passed as a prop */}
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <HooksIceCreamContainer />
        <hr />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App
