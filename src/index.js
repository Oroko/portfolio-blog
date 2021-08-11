import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducers/index";


import App from "./App"; 

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ColorModeScript initialColorMode="Dark"></ColorModeScript>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
