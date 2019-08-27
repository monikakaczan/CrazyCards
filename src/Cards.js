import React from "react";
import { validateProperty } from "./validateProperty";
import { cardList } from "./cardList";

export const Cards = props => {
  const employmentTypeQualified = validateProperty(
    props.person,
    cardList,
    "employmentType"
  );
  const annualIncomeQualified = validateProperty(
    props.person,
    employmentTypeQualified,
    "annualIncome"
  );
  var sum = 0;

  const avaliableCards = annualIncomeQualified.map((card, index) => (
    <li key={index} className="items">
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
