import { api } from "./httpService";

class PokemonServices {
  fetchAllPokemon(params) {
    return params !== undefined
      ? api.get(`/pokemon?offset=${params.offset}&limit=${params.limit}`)
      : api.get(`/pokemon`);
  }

  fetchPokemonDetail(name) {
    return api.get(`/pokemon/${name}`);
  }
}

export default new PokemonServices();
