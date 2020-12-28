import { food } from "../actions";
const {
  FETCH_ALL_FOODS_START,
  FETCH_ALL_FOODS_SUCCESS,
  FETCH_ALL_FOODS_FAILURE,
  FETCH_FOOD_START,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
  SET_ID,
  UPDATE_FOOD_START,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_FAILURE,
  UPDATE_FOOD_PICKUP,
  UPDATE_FOOD_OK,
  UPDATE_FOOD_NOTOK,
  FILL_FIELDS,
  HANDLE_SETTINGS_INPUT,
  SET_UPDATED,
  DELETE_FOOD_SUCCESS,
} = food;

const initialState = {
};

// const initialState = {
//   isFetching: false,
//   error: '',
//   id: null,
//   name: null,
//   quantity: null,
//   updated: false,
//   isDeleted: false,
// };

export const reducer = (state = initialState, action) => {
  // console.log('storeOperation:','state:',state,'action:',action)
  switch (action.type) {
    case FETCH_ALL_FOODS_START:
      return {
        ...state
      };
    case FETCH_ALL_FOODS_SUCCESS:
      console.log('action.payload:', action.payload)
      let d = {};
      for (let i in action.payload) {
        let food = action.payload[i]
        d[food.id] = food
      }
      return {
        ...state,
        ...d
      };
    case FETCH_ALL_FOODS_FAILURE:
      return {
        ...state
      };
    case FETCH_FOOD_START:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isFetching: true,
          error: ''  
        }
      };
    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...action.payload,
          isFetching: false,
          error: ''  
        }
      };
    case FETCH_FOOD_FAILURE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isFetching: false,
          error: action.payload 
        }
      };
      case UPDATE_FOOD_START:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            updated: false,  
          }
        };
      case UPDATE_FOOD_SUCCESS:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            ...action.payload,
            updated: true,  
          }
        };
      case UPDATE_FOOD_FAILURE:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            updated: false,  
          }
        };
        case UPDATE_FOOD_PICKUP:
          return {
            ...state,
            [action.id]: {
              ...state[action.id],
              updated: false,  
            }
          };
        case UPDATE_FOOD_OK:
          console.log('Update food ok-id:', action.id, 'pickupTime:', action.payload.pickupTime)
          return {
            ...state,
            [action.id]: {
              ...state[action.id],
              volunteer_name: action.payload.volunteer_name,
              vol_id: action.payload.id,
              pickupTime: action.payload.pickupTime,
              updated: true,  
            }
          };
        case UPDATE_FOOD_NOTOK:
          return {
            ...state,
            [action.id]: {
              ...state[action.id],
              updated: false,  
            }
          };
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
      case DELETE_FOOD_SUCCESS:
        return {
          ...state,
          [action.id]: {
            isDeleted: true,  
          }
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