import React from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../components";
import { MyPokemonList, PokemonDetail, PokemonList } from "../pages";

const Mobile = () => {
  return (
    <div className="mobile">
      <Routes>
        <Route path="/" element={<PokemonList.Mobile />} />
        <Route path="/pokemon/:name" element={<PokemonDetail.Mobile />} />
        <Route path="/mine" element={<MyPokemonList.Mobile />} />
      </Routes>
      <nav id="bottom-navigation" style={{ paddingBottom: 70 }}>
        <BottomNav.Mobile />
      </nav>
    </div>
  );
};

export default Mobile;
