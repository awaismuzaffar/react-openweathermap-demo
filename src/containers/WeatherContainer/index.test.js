import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import configureMockStore from 'redux-mock-store';
import  WeatherContainer from '.';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe("WeatherContainer", () => {
  
  let container = null;
  let store;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  describe("when fetching weather", () => {

    beforeEach(() => {
      store = mockStore({
        weather: {
          isFetching: true
        }
      });
    });
    
    it("should show the loader", () => {

      render(<Provider store={store}><WeatherContainer /></Provider>, container);
      
      expect(container.querySelectorAll('[data-testid="loader"]').length).toBe(1);
    });
  });

  describe("when loaded weather", () => {

    beforeEach(() => {
      store = mockStore({
        weather: {
          isFetching: false,
          data: {
            city: {
              name: 'London'
            },
            list: []
          }
        },
        settings: {
          isCelsius: true
        }
      });
    });
    
    it("should show the weather card", () => {

      render(<Provider store={store}><WeatherContainer /></Provider>, container);
      
      expect(container.querySelectorAll('.WeatherCard').length).toBe(1);
    });
  });
});