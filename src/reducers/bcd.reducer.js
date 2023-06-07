import { GET_BCDS } from "../actions/bcd.action";

const initialState = {};

export default function bcdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BCDS:
      return action.payload;
    default:
      return state;
  }
}
