import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import Routes from './routes';

const AppContext = React.createContext([{}, () => {}]);

function App() {
  const [products, setProducts] = useState([]);
  return(

  <AppContext.Provider
    value={{
      products, setProducts
    }}
  >
   <Routes/>
  </AppContext.Provider>
  );
};

export { App, AppContext };
