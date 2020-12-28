import {login} from "../actions";
const{
  UPDATE_LOGIN_STATE,
} = login;

export const reducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_STATE:
      return action.loggedIn;
    default:
      return state;
  }
}
