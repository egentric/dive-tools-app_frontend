import axios from "axios";

export const GET_BCDS = "GET_BCDS";

export const getBcds = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:8000/api/bcds", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: GET_BCDS, payload: res.data.data });
      });
  };
};
