import * as actionTypes from "../constants";

const initialState = {
  loading: false,
  error: null,
  data: [],
  total: 0,
  success: {
    add: false,
    delete: false,
  },
};

export default function addCollectionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION_SUCCESS:
      return {
        ...state,
        // data: [...state.data, action.payload],
        data: action.payload,
        // total: state.data.length,
        success: {
          add: true,
          delete: false,
        },
      };
    case actionTypes.ADD_COLLECTION_FAILED:
      return {
        ...state,
        success: {
          add: false,
          delete: false,
        },
      };
    case actionTypes.DELETE_COLLECTION_SUCCESS:
      return {
        ...state,
        data: [],
        total: state.data.length,
        success: {
          add: false,
          delete: true,
        },
      };
    case actionTypes.DELETE_COLLECTION_FAILED:
      return {
        ...state,
        success: {
          add: false,
          delete: false,
        },
      };
    case actionTypes.SET_COLLECTION_DEFAULT:
      return {
        ...state,
        loading: false,
        error: null,
        data: [],
        total: 0,
        success: {
          add: false,
          delete: false,
        },
      };
    default:
      return state;
  }
}
