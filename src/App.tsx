import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import Navigation from "./router/Routing.tsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
