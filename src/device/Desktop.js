import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../components";
import { MyPokemonList, PokemonDetail, PokemonList } from "../pages";

const Desktop = () => {
  return (
    <div className="desktop">
      <Routes>
        <Route path="/" element={<PokemonList.Desktop />} />
        <Route path="/pokemon/:name" element={<PokemonDetail.Desktop />} />
        <Route path="/mine" element={<MyPokemonList.Desktop />} />
      </Routes>
      <nav id="bottom-navigation" style={{ paddingBottom: 70 }}>
        <BottomNav.Desktop />
      </nav>
    </div>
  );
};

export default Desktop;
