import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import configureMockStore from 'redux-mock-store';

import { act } from "react-dom/test-utils";
import  WeatherContainer from '.';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'


//const middlewares = [thunk];
const mockStore = configureMockStore();


describe('WeatherContainer', () => {
  
  let container = null;
  let store;
  const initialState = {
    weather: {
      isFetching: false
    },
    settings: {
      isCelsius: true
    }
  };

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it("renders", () => {
    store = mockStore(initialState)
    render(<Provider store={store}><WeatherContainer /></Provider>, container);
  });
});