import { createContext, useContext } from "react";

export const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};
