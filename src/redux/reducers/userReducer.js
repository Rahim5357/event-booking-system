import { getLocalStorageValue, removeLocalStorageValue, setLocalStorageValue } from "../../utils/localStorageValue";

const initialStates = "";
const userReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      setLocalStorageValue("username", action.payload);
      return action.payload;
    case "USER_LOGOUT":
      removeLocalStorageValue("username");
      return null;
    case "USER_NAME":
      return getLocalStorageValue("username") || state;
    default:
      return state;
  }
};

export default userReducer;