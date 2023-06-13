import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
// import { getTanks } from "./actions/tank.action";
// import { getResevations } from "./actions/reservation.action";
// import { getBcds } from "./actions/bcd.action";
// import { getRegulators } from "./actions/regulator.action";
// import { getUser } from "./actions/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// store.dispatch(getTanks());
// store.dispatch(getResevations());
// store.dispatch(getBcds());
// store.dispatch(getRegulators());
// store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
