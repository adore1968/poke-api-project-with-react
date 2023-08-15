import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { Loader } from "../components/Loader";

export const PokemonPage = () => {
  const { id } = useParams();
  const { getPokemon } = usePokemon();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPokemon = async () => {
    try {
      const res = await getPokemon(id);
      setPokemon(res.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetPokemon();
  }, []);

  if (isLoading) return <Loader />;

  const image = pokemon.sprites.other.dream_world.front_default;
  const name = pokemon.name;
  const order = pokemon.order;
  const types = pokemon.types;
  const stats = pokemon.stats;

  return (
    <div className="container mx-auto pt-20">
      <img src={image} alt={name} className="mx-auto" />
      <div className="text-center mt-5">
        <p className="text-lg sm:text-xl text-gray-600">N° {order}</p>
        <h2 className="text-xl sm:text-2xl my-3">{name}</h2>
        <div className="flex justify-center gap-5 mb-3">
          {types.map((type) => (
            <button
              key={type.type.name}
              className={`bg-blue-500 px-4 py-1 text-white text-lg sm:text-xl ${type.type.name}`}
            >
              {type.type.name}
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl mb-1">Stats</h3>
          {stats.map((stat) => (
            <div
              key={stat.stat.name}
              className="flex justify-center gap-1 text-lg sm:text-xl"
            >
              <p className="mb-1 last-of-type:mb-0">{stat.stat.name}:</p>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
