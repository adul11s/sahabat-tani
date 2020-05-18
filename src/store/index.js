import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer/loginReducer";
import categoriesReducer from "./reducer/categoriesReducer";
import productReducer from "./reducer/categoriesReducer";
import transactionReducer from "./reducer/transactionReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  categories: categoriesReducer,
  product: productReducer,
  transaction: transactionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
