import axios from "axios";

export const GET_TANKS = "GET_TANKS";

export const getTanks = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:8000/api/tanks", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: GET_TANKS, payload: res.data.data });
      });
  };
};
