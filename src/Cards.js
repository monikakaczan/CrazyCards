import React, { Component } from 'react';
import { render } from 'react-dom';

const Cards = (props) => {
  const employmentTypeQualified = validateProperty(props.person, cardList, 'employmentType')
  return employmentTypeQualified.map(card => <p> {card.name}</p>)
}
