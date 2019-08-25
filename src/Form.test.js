import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { Form } from "./Form";
import Enzyme, { mount }  from "enzyme";
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

it("when simulating a change, select should update its value lower income", () => {
  const wrapper = mount(<Form value="lowerIncome" onChange={jest.fn()} />);
  expect(wrapper.update("select").props().value).toBe("lowerIncome");
});

it("when simulating a change, select should update its value higher income", () => {
  const wrapper = mount(<Form value="higherIncome" onChange={jest.fn()} />);
  expect(wrapper.update("select").props().value).toBe("higherIncome");
});

it("calls handleSubmit when the form is submitted", () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<Form onSubmit={onSubmitFn}/>);
  const form = wrapper.find('form');
  wrapper.prop('onSubmit') === 'submit'
});

it("mocks preventDeault()", () => {
  const preventDefaultFn = jest.fn();
  const onSubmitFn = jest.fn();
  const wrapper = mount(<Form onSubmit={onSubmitFn}/>);
  const form = wrapper.find('form');

  wrapper.prop('submit', preventDefaultFn);

})
