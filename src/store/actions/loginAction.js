import axios from "axios";

export const doLogin = (props) => {
  console.log("cek masuk");
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().login.name,
      password: getState().login.sandi,
    };
    await axios
      .post("https://api-todofancy.herokuapp.com/api/auth", bodyRequest)
      .then(async (response) => {
        if (response.data.hasOwnProperty("status")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (el) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: el,
  };
};
export const doLogout = (el) => {
  return {
    type: "LOG_OUT",
    payload: el,
  };
};
