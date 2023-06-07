import { GET_RESERVATIONS } from "../actions/reservation.action";

const initialState = {};

export default function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
