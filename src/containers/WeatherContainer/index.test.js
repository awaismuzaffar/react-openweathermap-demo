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
  
  describe("while fetching", () => {

    beforeEach(() => {
      store = mockStore({
        weather: {
          isFetching: true
        }
      });
    });
    
    it("should show the fetching message", () => {
      
      render(<Provider store={store}><WeatherContainer /></Provider>, container);

      expect(container.textContent).toBe('Fetching...');
    });
  });
});