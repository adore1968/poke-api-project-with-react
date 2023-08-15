import { usePokemon } from "../context/PokemonContext";
import { PokemonCard, Loader } from "./index";
import filterTypes from "../data/filterTypes";

export const PokemonList = () => {
  const { pokemons, isLoading, searchMore, filterByType, filteredPokemons } =
    usePokemon();

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl">Filter</h2>
        <h3 className="text-xl sm:text-2xl my-1">Types</h3>
        <div className="flex gap-5 flex-wrap">
          {filterTypes.map((type) => (
            <button
              key={type.type}
              className={`${type.type} text-white px-4 py-1`}
              onClick={() => filterByType(type.type)}
            >
              {type.type}
            </button>
          ))}
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {filteredPokemons.length > 0
          ? filteredPokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))
          : pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
      </div>
      <button
        onClick={() => searchMore()}
        className="my-8 bg-green-600 px-4 py-2 text-white text-lg sm:text-xl mx-auto block hover:bg-green-500 transition-colors"
      >
        Search more
      </button>
    </div>
  );
};
