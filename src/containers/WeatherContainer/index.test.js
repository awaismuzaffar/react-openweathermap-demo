import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import configureMockStore from 'redux-mock-store';
import  WeatherContainer from '.';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe('WeatherContainer', () => {
  
  const initialState = {
    weather: {
      isFetching: false
    },
    settings: {
      isCelsius: true
    }
  };

  let container = null;
  let store;

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