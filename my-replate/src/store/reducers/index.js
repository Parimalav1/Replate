import { combineReducers } from "redux";
import { reducer as user } from "./userReducer";
import { reducer as settings } from "./userOtherReducers";
import { reducer as food } from "./foodReducers";
import { reducer as signup } from "./registerReducer";
import { reducer as login } from "./loginReducer";

export default combineReducers({
  user,
  settings,
  food,
  signup,
  login
});
