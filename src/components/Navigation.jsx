import { Outlet, Link, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

export const Navigation = () => {
  const { search, handleSearch, setSearch } = usePokemon();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };

  return (
    <>
      <nav className="flex justify-around items-center p-5">
        <Link to="/" className="text-xl sm:text-2xl">
          <h1>Poke Api</h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-5 text-lg sm:text-xl"
        >
          <input
            type="text"
            placeholder="Search pokemon"
            value={search}
            onChange={(e) => handleSearch(e)}
            className="p-2 bg-black text-white"
          />
          <button
            type="submit"
            className="bg-green-600 py-2 px-4 text-white hover:bg-green-500 transition-colors"
          >
            Search
          </button>
        </form>
      </nav>
      <Outlet />
    </>
  );
};
