import { api } from "./httpService";

//
//debug
// console.log("url", baseUrl);
// console.log("api", api);

class PokemonServices {
  //
  //data public
  fetchAllPokemon(params) {
    console.log("PARAMS: ", params);
    return params !== undefined
      ? api.get(`/pokemon?offset=${params.offset}&limit=${params.limit}`)
      : api.get(`/pokemon`);
  }

  fetchPokemonDetail(name) {
    return api.get(`/pokemon/${name}`);
  }

  //   latestPostUser = (user_id) => {
  //     return api.get(`/posts/${user_id}`);
  //   };
}

export default new PokemonServices();
