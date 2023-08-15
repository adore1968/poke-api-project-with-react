import PokemonProvider from "./context/PokemonProvider";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <PokemonProvider>
      <AppRoutes />
    </PokemonProvider>
  );
}

export default App;
