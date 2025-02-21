const capitalizeFirstLetter = (word: string) => {
  if (!word) {
    return '';
  }
  return word[0].toUpperCase() + word.slice(1);
};

const getDateToMonthYear = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

function getDateToISODate(dateStr: string) {
  return new Date(dateStr).toISOString().split('T')[0];
}

export {capitalizeFirstLetter, getDateToMonthYear, getDateToISODate};
