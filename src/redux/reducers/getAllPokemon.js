import * as actionTypes from "../constants";

const initialState = {
  loading: false,
  loading_more: false,
  error: null,
  data: [],
  total: 0,
  params: {},
};

const getParams = (url) => {
  if (url != null) {
    const url_obj = new URL(url);
    const params = new URLSearchParams(url_obj.search);
    const objparams = {
      offset: parseInt(params.get("offset")),
      limit: parseInt(params.get("limit")),
    };

    return objparams;
  }
};

export default function getAllPokemonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_POKEMON_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LOAD_MORE_START:
      return {
        ...state,
        loading_more: true,
      };
    case actionTypes.GET_ALL_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case actionTypes.GET_ALL_POKEMON_MORE:
      return {
        ...state,
        loading: false,
        loading_more: false,
        error: null,
        data: [...state.data, ...action.payload],
      };
    case actionTypes.GET_ALL_POKEMON_TOTAL:
      return {
        ...state,
        loading: false,
        error: null,
        total: action.payload,
      };
    case actionTypes.GET_ALL_POKEMON_NEXT:
      return {
        ...state,
        loading: false,
        error: null,
        params: getParams(action.payload),
      };
    case actionTypes.GET_ALL_POKEMON_NEXT_NULL:
      return {
        ...state,
        loading: false,
        error: null,
        params: { offset: 0, limit: 0 },
      };
    case actionTypes.GET_ALL_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
        total: 0,
        params: {},
      };
    default:
      return state;
  }
}
