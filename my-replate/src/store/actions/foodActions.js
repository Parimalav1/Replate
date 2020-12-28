import { axiosWithAuth } from "../../utils";

export const FETCH_ALL_FOODS_START = "FETCH_ALL_FOODS_START";
export const FETCH_ALL_FOODS_SUCCESS = "FETCH_ALL_FOODS_SUCCESS";
export const FETCH_ALL_FOODS_FAILURE = "FETCH_ALL_FOODS_FAILURE";

export const fetchAllFoods = () => (dispatch) => {
  console.log('fetchAllFoods called');
  dispatch({ type: FETCH_ALL_FOODS_START});
  axiosWithAuth()
    .get(`/api/foodItems`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_ALL_FOODS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ALL_FOODS_FAILURE, payload: err });
    });
};

export const FETCH_FOOD_START = "FETCH_FOOD_START";
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";

export const fetchFood = (id) => (dispatch) => {
  console.log('fetchFood called with id:', id)
  dispatch({ type: FETCH_FOOD_START, id: id });
  axiosWithAuth()
    .get(`/api/foodItems/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_FOOD_SUCCESS, id:id, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FOOD_FAILURE, id: id, payload: err });
    });
};

export const UPDATE_FOOD_START = "UPDATE_FOOD_START";
export const UPDATE_FOOD_SUCCESS = "UPDATE_FOOD_SUCCESS";
export const UPDATE_FOOD_FAILURE = "UPDATE_FOOD_FAILURE";
export const updateFood = (data) => (dispatch) => {
  const { id, req } = data;
  dispatch({ type: UPDATE_FOOD_START , id: id});
  axiosWithAuth()
    .put(`/api/foodItems/${id}`, req)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_FOOD_SUCCESS, id: id, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_FOOD_FAILURE, id: id });
    });
};

export const UPDATE_FOOD_PICKUP = "UPDATE_FOOD_PICKUP";
export const UPDATE_FOOD_OK = "UPDATE_FOOD_OK";
export const UPDATE_FOOD_NOTOK = "UPDATE_FOOD_NOTOK";
export const updateFoodPickup= (data) => (dispatch) => {
  const { id, vol_id, req } = data;
  dispatch({ type: UPDATE_FOOD_PICKUP , id: id});
  axiosWithAuth()
    .put(`/api/volunteers/${vol_id}/foodItems/${id}`, req)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_FOOD_OK, id: id, vol_id: vol_id, payload: res.data});
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_FOOD_NOTOK, id: id, vol_id: vol_id });
    });
};


export const HANDLE_SETTINGS_INPUT = "HANDLE_SETTINGS_INPUT";
export const handleSettingsInput = (e) => (dispatch) => {
  dispatch({ type: HANDLE_SETTINGS_INPUT, payload: e.target });
};

export const DELETE_FOOD_START = "DELETE_FOOD_START";
export const DELETE_FOOD_SUCCESS = "DELETE_FOOD_SUCCESS";
export const DELETE_FOOD_FAILURE = "DELETE_FOOD_FAILURE";

export const deleteFood = (id) => (dispatch) => {
  dispatch({ type: DELETE_FOOD_START, id: id });
  axiosWithAuth()
    .delete(`/api/foodItems/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_FOOD_SUCCESS, id: id });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: DELETE_FOOD_FAILURE, id: id });
      console.log(err);
    });
};
