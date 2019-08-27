export function validateProperty(person, cardList, property) {
  const filterByProperty = card => {
    if (card[property].length === 0) {
      return true;
    }
    return card[property].includes(person[property]);
  };
  return cardList.filter(filterByProperty);
}
