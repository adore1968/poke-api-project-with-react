import { useLocation } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { PokemonCard } from "../components/PokemonCard";

export const SearchPage = () => {
  const location = useLocation();
  const { allPokemons } = usePokemon();

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container mx-auto pt-20">
      <h2 className="text-xl sm:text-2xl">
        Se encontraron {filteredPokemons.length} resultados
      </h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-10 mb-8">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
