import React from "react";
import ReactDOM from "react-dom";
import { Form } from "./Form";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("initializes with employment type and annual income", function() {
  const handleSubmitFn = jest.fn();
  const wrapper = mount(<Form callback={handleSubmitFn} />);

  wrapper.find("form").simulate("submit");

  expect(handleSubmitFn).toHaveBeenCalledWith({
    annualIncome: "lowerIncome",
    employmentType: "partTime"
  });
});

it("if the user changes employment type, change the state on handle submit", function() {
  const handleSubmitFn = jest.fn();
  const wrapper = mount(<Form callback={handleSubmitFn} />);
  wrapper
    .find("select")
    .at(0)
    .simulate("change", { target: { value: "fullTime" } });
  wrapper.find("form").simulate("submit");
  expect(handleSubmitFn).toHaveBeenCalledWith({
    annualIncome: "lowerIncome",
    employmentType: "fullTime"
  });
});
it("if the user changes annual income, change the state on handle submit", function() {
  const handleSubmitFn = jest.fn();
  const wrapper = mount(<Form callback={handleSubmitFn} />);
  wrapper
    .find("select")
    .at(1)
    .simulate("change", { target: { value: "higherIncome" } });
  wrapper.find("form").simulate("submit");
  expect(handleSubmitFn).toHaveBeenCalledWith({
    annualIncome: "higherIncome",
    employmentType: "partTime"
  });
});
