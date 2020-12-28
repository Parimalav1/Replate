import { user } from "../actions";
const {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SET_ID,
} = user;

const initialState = {
  isLoading: false,
  id: null,
  name: '',
  username: '',
  address: '',
  phoneNumber: '',
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };  
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        address: action.payload.address,
        phoneNumber: action.payload.phoneNumber,
        isLoading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
