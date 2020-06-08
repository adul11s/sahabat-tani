import axios from "axios";
const url = "https://lolbe.perintiscerita.shop/product/list";

// untuk mendapatkan list movie
export const getProduct = (category) => {
  return async (dispatch) => {
    axios
      .get(url)
      .then(async (response) => {
        if (category) {
          const filtercategory = response.data.filter((item) => {
            if (item.category_id === category) {
              return item;
            } else {
              return false;
            }
          });
          console.log(filtercategory, "axiooooooos");
          dispatch({
            type: "REQUEST_PRODUCT_CATEGORIES_SUCCESS",
            payload: filtercategory,
          });
        } else {
          dispatch({
            type: "REQUEST_LIST_PRODUCT_SUCCESS",
            payload: response.data,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getProductId = (id) => {
  return async (dispatch) => {
    axios
      .get(url)
      .then(async (response) => {
        if (id) {
          const filterid = response.data.filter((item) => {
            if (item.id === Number(id)) {
              return item;
            } else {
              return false;
            }
          });
          console.log(filterid, "axiooooooos");
          dispatch({
            type: "REQUEST_PRODUCT_ID_SUCCESS",
            payload: filterid,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getTopProduct = () => {
  return async (dispatch) => {
    axios
      .get(url)
      .then(async (response) => {
        const filterseller = response.data.filter((item) => {
          if (item.top_product === "True") {
            return item;
          } else {
            return false;
          }
        });
        console.log(filterseller, "axiooooooos");
        dispatch({
          type: "REQUEST_TOP_PRODUCT_SUCCESS",
          payload: filterseller,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const getMyProduct = () => {
  return async (dispatch) => {
    axios
      .get(url)
      .then(async (response) => {
        const bio = JSON.parse(localStorage.getItem("bio"));
        const filtermyproduct = response.data.filter((item) => {
          if (item.seller_id === Number(bio["id"])) {
            return item;
          } else {
            return false;
          }
        });
        console.log(filtermyproduct, "axiooooooos");
        dispatch({
          type: "REQUEST_TOP_PRODUCT_SUCCESS",
          payload: filtermyproduct,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
