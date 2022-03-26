import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonList from "./pages/PokemonList";
import { BottomNav } from "./components";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import { MyPokemonList } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
            <Route path="/mine" element={<MyPokemonList />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <nav id="bottom-navigation" style={{ paddingBottom: 70 }}>
            <BottomNav />
          </nav>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
