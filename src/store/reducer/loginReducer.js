const initialState = {
  username: "",
  email: "",
  avatar: "",
  isLogin: false,
  nama: "",
  sandi: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...state,
        username: action.payload.user_data.username,
        email: action.payload.user_data.email,
        avatar: action.payload.user_data.avatar,
        isLogin: true,
      };
    case "LOG_OUT":
      return {
        isLogin: false,
      };
    default:
      return state;
  }
}
