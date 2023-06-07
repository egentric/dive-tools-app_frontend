import axios from "axios";

export const GET_RESERVATIONS = "GET_RESERVATIONS";

export const getResevations = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:8000/api/reservations", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: GET_RESERVATIONS, payload: res.data.data });
      });
  };
};
