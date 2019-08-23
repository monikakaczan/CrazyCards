import React from 'react';
import { validateProperty } from './validateProperty'
import {cardList } from './cardList'

export const Cards = (props) => {
  const employmentTypeQualified = validateProperty(
    props.person,
    cardList,
    "employmentType"
  );

  return employmentTypeQualified.map((card, index) => <ul style={{ listStyleType: "none" }}>
  <li key={index}>{card.name}</li> </ul> );
};
