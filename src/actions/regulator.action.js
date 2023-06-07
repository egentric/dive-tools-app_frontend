import axios from "axios";

export const GET_REGULATORS = "GET_REGULATORS";

export const getRegulators = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:8000/api/regulators", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: GET_REGULATORS, payload: res.data.data });
      });
  };
};
