import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { initialState } from "../reducers/shop/reducer";
import { composeEnhancers } from "../store";
export const testStore = initialState => {
  const createStpreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
    createStore
  );
  return createStpreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
