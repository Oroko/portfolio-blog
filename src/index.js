import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";


import App from "./App";

ReactDOM.render(

  <React.StrictMode>
  
      <ChakraProvider>
        <ColorModeScript initialColorMode='Dark'></ColorModeScript>
        <App />
      </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
