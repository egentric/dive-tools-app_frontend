import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = () => {
  return (dispatch) => {
    return axios
      .get(`http://127.0.0.1:8000/api/current-user`, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: GET_USER, payload: res.data });
      });
  };
};
