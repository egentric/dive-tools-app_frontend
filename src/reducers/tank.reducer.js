import { ADD_TANKS, GET_TANKS } from "../actions/tank.action";

const initialState = {};

export default function tankReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TANKS:
      return action.payload;
    default:
      return state;
  }
}
