import { Link } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  const id = pokemon.id;
  const image = pokemon.sprites.other.dream_world.front_default;
  const name = pokemon.name;
  const order = pokemon.order;
  const types = pokemon.types;

  return (
    <div className="flex flex-col gap-5">
      <Link to={`/pokemon/${id}`}>
        <img src={image} alt={name} className="w-full min-h-[234px] max-h-64" />
      </Link>
      <div>
        <p className="text-lg sm:text-xl text-gray-600">N° {order}</p>
        <h3 className="text-xl sm:text-2xl my-3">{name}</h3>
        <div className="flex">
          {types.map((type) => (
            <button
              key={type.type.name}
              className={`first-of-type:mr-5 bg-blue-500 px-4 py-1 text-white text-lg sm:text-xl ${type.type.name}`}
            >
              {type.type.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
