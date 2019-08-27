import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Form } from "./form";
import { Cards } from "./Cards";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("renders Cards and Form components", () => {
  const wrapper = mount(<App />);
  expect(wrapper.exists(Cards)).toBe(true);
  expect(wrapper.exists(Form)).toBe(true);
});
