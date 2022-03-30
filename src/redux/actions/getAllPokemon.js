import * as actionTypes from "../constants";
import PokemonService from "../../services/pokemonService";
import { loadMoreStart } from "./loadMore";

const getPathUrl = (url) => {
  const pattern_url = url.split("//");
  const _id = pattern_url[1].split("/")[4];
  return _id;
};

const dataManipulate = (data) => {
  return data.map((item, index) => {
    return {
      name: item.name,
      link: item.url,
      id: parseInt(getPathUrl(item.url)),
    };
  });
};

export const getAllPokemonAction = () => (dispatch) => {
  dispatch(getAllPokemonStart());
  PokemonService.fetchAllPokemon()
    .then((res) => {
      dispatch(getAllPokemonSuccess(dataManipulate(res.data.results)));
      dispatch(getAllPokemonTotal(res.data.count));
      if (res.data.next !== null) {
        dispatch(getAllPokemonNext(res.data.next));
      } else {
        dispatch(getAllPokemonNextNull());
      }
    })
    .catch((err) => {
      dispatch(getAllPokemonFail(err));
    });
};

export const getAllPokemonActionMore = (params) => (dispatch) => {
  dispatch(loadMoreStart());
  PokemonService.fetchAllPokemon(params)
    .then((res) => {
      dispatch(getAllPokemonMore(dataManipulate(res.data.results)));
      dispatch(getAllPokemonNext(res.data.next));
    })
    .catch((err) => {
      dispatch(getAllPokemonFail(err));
    });
};

export const getAllPokemonStart = () => ({
  type: actionTypes.GET_ALL_POKEMON_START,
});

export const getAllPokemonMore = (more_data) => ({
  type: actionTypes.GET_ALL_POKEMON_MORE,
  payload: more_data,
});

export const getAllPokemonTotal = (total) => ({
  type: actionTypes.GET_ALL_POKEMON_TOTAL,
  payload: total,
});

export const getAllPokemonNext = (next) => ({
  type: actionTypes.GET_ALL_POKEMON_NEXT,
  payload: next,
});

export const getAllPokemonNextNull = () => ({
  type: actionTypes.GET_ALL_POKEMON_NEXT,
});

export const getAllPokemonSuccess = (data) => ({
  type: actionTypes.GET_ALL_POKEMON_SUCCESS,
  payload: data,
});

export const getAllPokemonFail = (error) => ({
  type: actionTypes.GET_ALL_POKEMON_FAIL,
  payload: { error },
});
