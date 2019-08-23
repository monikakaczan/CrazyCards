export function validateProperty(person, cardList, property) {
  return cardList.filter(card => card[property].includes(person[property]));
}
