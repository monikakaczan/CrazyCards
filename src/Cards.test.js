import React from "react";
import ReactDOM from "react-dom";
import { Cards } from "./Cards";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("filters cards based on student employment type", function() {
  const validatePropertyFn = jest.fn();
  const student = {
    annualIncome: "lowerIncome",
    employmentType: "student"
  };
  const wrapper = mount(<Cards person={student} />);
  expect(wrapper.find(".items")).toBeDefined();
  expect(wrapper.find(".items")).toHaveLength(2);
});
