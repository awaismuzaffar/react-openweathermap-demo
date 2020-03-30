import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import  Loader from '.';

describe('Loader', () => {
  
  let container = null;

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
    render(<Loader />, container);
  });
});