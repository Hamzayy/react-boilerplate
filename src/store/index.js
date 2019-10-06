import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import rootReducer from "../redux/rootReducer";
import rootSaga from "../redux/rootSaga";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
        logger,
      )
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
