import { combineReducers } from "redux";
import tankReducer from "./tank.reducer";
import reservationReducer from "./reservation.reducer";
import bcdReducer from "./bcd.reducer";
import regulatorReducer from "./regulator.reducer";

export default combineReducers({
  tankReducer,
  bcdReducer,
  regulatorReducer,
  reservationReducer,
});
