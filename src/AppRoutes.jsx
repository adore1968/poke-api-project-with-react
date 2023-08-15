import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage, PokemonPage, SearchPage } from "./pages/index";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
