import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../components";
import {
  MyPokemonList,
  PokemonDetail,
  PokemonList,
  SearchPage,
} from "../pages";

const Desktop = () => {
  return (
    <div className="desktop">
      <Routes>
        <Route path="/" element={<PokemonList.Desktop />} />
        <Route path="/pokemon/:name" element={<PokemonDetail.Desktop />} />
        <Route path="/mine" element={<MyPokemonList.Desktop />} />
        <Route path="/search" element={<SearchPage.Desktop />} />
      </Routes>
    </div>
  );
};

export default Desktop;
