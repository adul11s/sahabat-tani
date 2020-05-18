const initialState = { data: [], isLoading: true };

export default function productReducer(stateCategories = initialState, action) {
  switch (action.type) {
    case "REQUEST_PRODUCT_CATEGORIES_SUCCESS":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
      console.log("ceeeeeeeeeeeeeeeekkkkkkkkkkkkkkkkkkkk masuuuuuuukkkkkkkk");
    case "REQUEST_LIST_PRODUCT_SUCCESS":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "REQUEST_PRODUCT_ID_SUCCESS":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "SUCCESS_ADD_PRODUCT":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "REQUEST_TOP_PRODUCT_SUCCESS":
      return {
        ...stateCategories,
        isLoading: false,
        data: action.payload,
      };
    case "REQUEST_MY_PRODUCT_SUCCESS":
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
