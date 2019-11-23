// import { combineReducers } from "redux";

import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  TOGGLE_EDIT
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  isDeleting: false,
  isEditing: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch actions
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    //post actions
    case POST_SMURF_START:
      return {
        ...state,
        isPosting: true
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isPosting: false,
        error: ""
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPosting: false
      };
    //delete actions
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeleting: false
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    //edit actions
    case EDIT_SMURF_START:
      return {
        ...state,
        isEditing: true
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isEditing: false
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };
    //toggle edit action
    case TOGGLE_EDIT:
      return {
        ...state,
        isEditing: true
      };
    //default case
    default:
      return state;
  }
};

// export const fetchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_SMURF_START:
//       return {
//         ...state,
//         isFetching: true
//       };
//     case FETCH_SMURF_SUCCESS:
//       return {
//         ...state,
//         smurfs: action.payload,
//         isFetching: false,
//         error: ""
//       };
//     case FETCH_SMURF_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false
//       };

//     default:
//       return state;
//   }
// };

// export const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case POST_SMURF_START:
//       return {
//         ...state,
//         isPosting: true
//       };
//     case POST_SMURF_SUCCESS:
//       return {
//         ...state,
//         smurfs: action.payload,
//         isPosting: false,
//         error: ""
//       };
//     case POST_SMURF_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         isPosting: false
//       };

//     default:
//       return state;
//   }
// };

// export const deleteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_SMURF_START:
//       return {
//         ...state,
//         isDeleting: true
//       };
//     case DELETE_SMURF_SUCCESS:
//       return {
//         ...state,
//         smurfs: action.payload,
//         isDeleting: false
//       };
//     case DELETE_SMURF_FAILURE:
//       return {
//         ...state,
//         isDeleting: false,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export const editReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case EDIT_SMURF_START:
//       return {
//         ...state,
//         isEditing: true
//       };
//     case EDIT_SMURF_SUCCESS:
//       return {
//         ...state,
//         smurfs: action.payload,
//         isEditing: false
//       };
//     case EDIT_SMURF_FAILURE:
//       return {
//         ...state,
//         isEditing: false,
//         error: action.payload
//       };
//     case TOGGLE_EDIT:
//       return {
//         ...state,
//         isEditing: true
//       };
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   fetchReducer,
//   postReducer,
//   editReducer,
//   deleteReducer
// });
