const initialState = {
  id: "",
  category_id: "",
  password: "",
  product_name: "",
  image: "",
  price: "",
  color: "",
  weight: "",
  top_product: "",
  promo: "",
  discount: "",
  sold: "",
  stock: "",
  isLoading: true,
};
export default function productReducer(stateCategories = initialState, action) {
  switch (action.type) {
    case "SUCCESS_ADD_PRODUCT":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "SUCCESS_DELETE_PRODUCT":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "SUCCESS_PATCH_PRODUCT":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "CHANGE_INPUT_PRODUCT":
      return {
        ...stateCategories,
        [action.payload.target.name]: action.payload.target.value,
      };
    default:
      return stateCategories;
  }
}
