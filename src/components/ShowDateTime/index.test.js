import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import  ShowDateTime from './index';
import { act } from "react-dom/test-utils";

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
  render(<ShowDateTime />, container);
});

it("should show the formatted date from a unix timestamp", () => {

  act(() => {
    render(<ShowDateTime dt="1485799200" />, container);
  });
  
  expect(container.textContent).toBe("January 30th 2017, 6:00pm");
});