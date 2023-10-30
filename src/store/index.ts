import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "../sagas";

import rootReducer from "../reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, analyticsMiddleWare))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const analyticsMiddleWare = () => (next: (arg0: any) => any) => (action: any) => {
  //console.log('dispatching', action.type);
  const result = next(action);
  return result;
};
const store = configureStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
