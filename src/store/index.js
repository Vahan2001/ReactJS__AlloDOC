import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("action", action);
//       next(action);
//     };
//   };
// };

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
