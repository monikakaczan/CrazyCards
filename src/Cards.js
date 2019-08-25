import React from "react";
import { validateProperty } from "./validateProperty";
import { cardList } from "./cardList";

export const Cards = props => {
  const employmentTypeQualified = validateProperty(
    props.person,
    cardList,
    "employmentType" && "annualIncome"
  );
  var sum = 0;

  return employmentTypeQualified.map((card, index) => (
    <ul style={{ listStyleType: "none" }}>
      <li key={index}>
        {card.name} <br />
        {card.bto}
        <br />
        {card.pod}
        <br />
        Credit: £{card.avaliableCredit}
        <br />
      </li>
      <br />
      Total credit avaliable for all : £{(sum += card.avaliableCredit)}
    </ul>
  ));
};
