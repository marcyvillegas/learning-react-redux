import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HookIceCreamContainer";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  )
}

export default App
