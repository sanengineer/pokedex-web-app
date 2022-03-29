import { combineReducers } from "redux";
import addCollectionReducer from "./mineCollection";
import getAllPokemonReducer from "./getAllPokemon";

export default combineReducers({
  all_pokemon: getAllPokemonReducer,
  mine_collection: addCollectionReducer,
});
