import { combineReducers } from "redux";
import getAllPokemonReducer from "./getAllPokemon";

export default combineReducers({
  all_pokemon: getAllPokemonReducer,
});
