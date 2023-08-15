import axios from "./axios";

export const getPokemonsRequest = (limit, offset) => {
  return axios(`?limit=${limit}&offset=${offset}`);
};

export const getPromisesRequest = (url) => {
  return axios(url);
};

export const getPokemonRequest = (id) => {
  return axios(`/${id}`);
};

export const getAllPokemonsRequest = () => {
  return axios("?limit=100000&offset=0");
};
