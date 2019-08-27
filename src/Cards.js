import React from "react";
import { validateProperty } from "./validateProperty";
import { cardList } from "./cardList";

export const Cards = props => {
  const employmentTypeQualified = validateProperty(
    props.person,
    cardList,
    "employmentType"
  );
  console.log({employmentTypeQualified});
  const annualIncomeQualified = validateProperty(
    props.person,
    employmentTypeQualified,
    "annualIncome"
  );
  console.log({annualIncomeQualified});
  var sum = 0;

  const avaliableCards = annualIncomeQualified.map((card, index) => (
    <li key={index}>
      {card.name} <br />
      {card.bto}
      <br />
      {card.pod}
      <br />
      Credit: £{card.avaliableCredit}
      <br />
    </li>
  ));

  annualIncomeQualified.forEach(function(card) {
    sum += card.avaliableCredit;
  });

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>{avaliableCards}</ul>
      Total credit avaliable for all : £{sum}
    </div>
  );
};
