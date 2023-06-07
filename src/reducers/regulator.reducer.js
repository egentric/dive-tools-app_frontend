import { GET_REGULATORS } from "../actions/regulator.action";

const initialState = {};

export default function regulatorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REGULATORS:
      return action.payload;
    default:
      return state;
  }
}
