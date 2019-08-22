import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Form from "./Form";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("when simulating a change, select should update its value part-time", () => {
  const wrapper = mount(<Form value="part-time" onChange={jest.fn()} />);
  expect(wrapper.update("select").props().value).toBe("part-time");
});

it("when simulating a change, select should update its value full-time", () => {
  const wrapper = mount(<Form value="full-time" onChange={jest.fn()} />);
  expect(wrapper.update("select").props().value).toBe("full-time");
});


it("when simulating a change, select should update its value student", () => {
  const wrapper = mount(<Form value="student" onChange={jest.fn()} />);
  expect(wrapper.update("select").props().value).toBe("student");
});
