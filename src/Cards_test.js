// filter
//given a person with student employment type = >expect 2 cards
// given a person with annual income lower than 16k --> expect to see 1 card
//given a person with x employment and x salary ---> show me 1 card
const student = {
  annualIncome: "lowerIncome",
  employmentType: "student"
};
const wrapper = mount(<Cards person={student} />);
