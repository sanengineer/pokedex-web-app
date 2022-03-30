import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import React from "react";
import { isMobile } from "react-device-detect";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Desktop, Mobile } from "./device";
import store from "./redux/store";

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
