import { useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";
import {
  getPokemonsRequest,
  getPromisesRequest,
  getPokemonRequest,
  getAllPokemonsRequest,
} from "../api/pokemon";

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const [allPokemons, setAllPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const getPokemons = async (limit = 20) => {
    try {
      const res = await getPokemonsRequest(limit, offset);
      const promises = res.data.results.map(async (pokemon) => {
        const res = await getPromisesRequest(pokemon);
        return res.data;
      });
      const results = await Promise.all(promises);
      setPokemons([...pokemons, ...results]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  const getPokemon = async (id) => {
    return getPokemonRequest(id);
  };

  const getAllPokemons = async () => {
    try {
      const res = await getAllPokemonsRequest();
      const promises = res.data.results.map(async (pokemon) => {
        const res = await getPromisesRequest(pokemon);
        return res.data;
      });
      const results = await Promise.all(promises);
      setAllPokemons(results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const handleSearch = ({ target }) => {
    const value = target.value;
    setSearch(value);
  };

  const searchMore = () => {
    setOffset(offset + 20);
  };

  const filterByType = (type) => {
    if (type) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(type)
      );
      setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    } else {
      const filteredResults = allPokemons.filter(
        (pokemon) => !pokemon.types.map((type) => type.type.name).includes(type)
      );
      setFilteredPokemons([...filteredResults]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        isLoading,
        allPokemons,
        search,
        filteredPokemons,
        getPokemon,
        handleSearch,
        setSearch,
        searchMore,
        filterByType,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
