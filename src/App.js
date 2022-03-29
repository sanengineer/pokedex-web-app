import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonList from "./pages/PokemonList";
import { BottomNav } from "./components";
import "./App.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import SearchPage from "./pages/SearchPage";
import { MyPokemonList } from "./pages";

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Desktop, Mobile } from "./device";
import { isMobile } from "react-device-detect";

const history = createBrowserHistory({ window });

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        {isMobile ? <Mobile /> : <Desktop />}
      </HistoryRouter>
    </Provider>
  );
}

export default App;
