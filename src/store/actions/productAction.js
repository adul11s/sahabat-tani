import axios from "axios";
export const addProduct = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      category_id: getState().product.category_id,
      seller_id: getState().product.seller_id,
      product_name: getState().product.product_name,
      image: getState().product.image,
      price: getState().product.price,
      color: getState().product.color,
      weight: getState().product.weight,
      top_product: getState().product.top_product,
      promo: getState().product.promo,
      discount: getState().product.discount,
      sold: getState().product.sold,
      stock: getState().product.stock,
    };
    const register = await axios.post(
      "https://lolbe.perintiscerita.shop/product",
      bodyRequest
    );
    console.log("data", register.data);
    dispatch({ type: "SUCCESS_ADD_PRODUCT" });
  };
};
export const patchProduct = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      category_id: getState().product.category_id,
      seller_id: getState().product.seller_id,
      product_name: getState().product.product_name,
      image: getState().product.image,
      price: getState().product.price,
      color: getState().product.color,
      weight: getState().product.weight,
      top_product: getState().product.top_product,
      promo: getState().product.promo,
      discount: getState().product.discount,
      sold: getState().product.sold,
      stock: getState().product.stock,
    };
    const id = getState().product.id;
    const register = await axios.post(
      "https://lolbe.perintiscerita.shop/product/" + id,
      bodyRequest
    );
    console.log("data", register.data);
    dispatch({ type: "SUCCESS_PATCH_PRODUCT" });
  };
};
export const delProduct = (props) => {
  return async (dispatch, getState) => {
    const id = getState().product.id;

    console.log("data", id);
    await axios.delete(`https://lolbe.perintiscerita.shop/product/${id}`);
    dispatch({ type: "SUCCESS_DELETE_PRODUCT" });
  };
};
export const changeInputProduct = (el) => {
  return {
    type: "CHANGE_INPUT_PRODUCT",
    payload: el,
  };
};
