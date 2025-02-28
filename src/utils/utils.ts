import { TypeOffer } from '../types/offers';

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

export const filterOffersByCity = (
  offers: TypeOffer[],
  city: string
): TypeOffer[] => offers.filter((offer) => offer.city.name === city);

const sortOffers = (value: string, offers: TypeOffer[]) => {
  switch (value) {
    case 'Price: low to high':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export { capitalizeFirstLetter, getDateToMonthYear, getDateToISODate, sortOffers };
