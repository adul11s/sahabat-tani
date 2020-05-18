import axios from "axios";

const baseUrl = "http://0.0.0.0:5050";

export const postTransaction = (
  product_id,
  quantity,
  shipping_id,
  payment_id
) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/transaction",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      params: {
        product_id: product_id,
        quantity: quantity,
        shipping_id: shipping_id,
        payment_id: payment_id,
      },
    });
  };
};

export const getTransaction = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get(baseUrl + "/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "GET_TRANSACTION",
          payload: response.data,
        });
      });
  };
};

export const changeInputTransaction = (el) => {
  return { type: "CHANGE_INPUT_TRANSACTION", payload: el };
};
