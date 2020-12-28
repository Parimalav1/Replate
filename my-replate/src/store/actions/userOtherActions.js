import { axiosWithAuth, clearToken } from "../../utils";
export const SIGN_OUT = "SIGN_OUT";
export const signOut = () => (dispatch) => {
  clearToken();
  dispatch({ type: SIGN_OUT });
};

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const updateUser = (data) => (dispatch) => {
  const { id, req } = data;
  dispatch({ type: UPDATE_USER_START });
  axiosWithAuth()
    .put(`/api/users/${id}`, req)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_USER_FAILURE });
    });
};

// export const FILL_FIELDS = "FILL_FIELDS";
// export const fillFields = (userData) => (dispatch) => {
//   dispatch({ type: FILL_FIELDS, payload: userData });
// };

export const HANDLE_SETTINGS_INPUT = "HANDLE_SETTINGS_INPUT";
export const handleSettingsInput = (e) => (dispatch) => {
  dispatch({ type: HANDLE_SETTINGS_INPUT, payload: e.target });
};

// export const SET_UPDATED = "SET_UPDATED";
// export const setUpdated = (bool) => (dispatch) => {
//   dispatch({ type: SET_UPDATED, payload: bool });
// };

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const deleteUser = (id) => (dispatch) => {
  dispatch({ type: DELETE_USER_START });
  axiosWithAuth()
    .delete(`/api/users/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_USER_SUCCESS });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: DELETE_USER_FAILURE });
      console.log(err);
    });
};
