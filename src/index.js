import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {Router, browserHistory, applyRouterMiddleware} from "react-router";
import reduxThunk from "redux-thunk";
import useScroll from "react-router-scroll";

import routes from "./routes";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware( reduxThunk )( createStore );

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware( reducers ) }>
    <Router history={ browserHistory } routes={ routes } render={ applyRouterMiddleware( useScroll() ) }/>
  </Provider>
  , document.getElementById( "container" ) );
