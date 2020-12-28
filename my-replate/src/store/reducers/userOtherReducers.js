import { settings } from "../actions";
const {
  SIGN_OUT,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FILL_FIELDS,
  HANDLE_SETTINGS_INPUT,
  SET_UPDATED,
  DELETE_USER_SUCCESS,
} = settings;

const initialState = {
  name: "",
  username: "",
  address: "",
  phoneNumber: '',
  updated: false,
  isDeleted: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_OUT:
      return state;
    case UPDATE_USER_START:
      return state;
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        updated: true,
      };
    case UPDATE_USER_FAILURE:
      return  {
        ...state,
        updated: false,
        error: action.payload
      }
    case FILL_FIELDS:
      return {
        ...state,
        fieldValues: action.payload,
      };
    case HANDLE_SETTINGS_INPUT:
      return {
        ...state,
        fieldValues: {
          ...state.fieldValues,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_UPDATED:
      return {
        ...state,
        updated: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleted: true,
      };
    default:
      return state;
  }
};
