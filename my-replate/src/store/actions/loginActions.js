

export const UPDATE_LOGIN_STATE = 'UPDATE_LOGIN_STATE';

export const updateLoginState = (loggedIn) => (dispatch) => {
  // console.log('fetchFood called with id:', id)
  dispatch({ type: UPDATE_LOGIN_STATE, loggedIn: loggedIn });
}
