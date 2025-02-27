import { Helmet } from 'react-helmet-async';
import { TypeOffer } from '../../types/offers';
import OffersList from '../../components/offers-list/offers-list';
import { useEffect, useState } from 'react';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityAction } from '../../store/action';
import { filterOffersByCity } from '../../utils/utils';
import { TypeCity } from '../../types/offers';
import { offersAction } from '../../store/action';

type MainScreenProps = {
  offers: TypeOffer[];
};

function MainScreen({ offers }: MainScreenProps): JSX.Element {

  const [selectedCard, setSelectedCard] = useState<TypeOffer | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState<TypeCity>(CITIES[0]);

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const listOffers = useAppSelector((state) => state.listOffers);

  useEffect(() => {
    const filteredOffers: TypeOffer[] = filterOffersByCity(offers, selectedCity.name);
    dispatch(offersAction(filteredOffers));
  }, [city, offers, dispatch, selectedCity.name]);

  const handleMouseOver = (id: string) => {
    setSelectedCard(offers.find((offer) => offer.id === id));
  };

  const handleMouseLeave = () => {
    setSelectedCard(undefined);
  };

  const handleCityChange = (cityName: string) => {
    const newSelectesCity = CITIES.find((newCity) => newCity.name === cityName);
    if (newSelectesCity) {
      setSelectedCity(newSelectesCity);
      dispatch(cityAction(cityName));
    }
  };


  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList selectedCity={selectedCity.name} handleCityChange={handleCityChange} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {listOffers.length} places to stay in {city}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <OffersList
              offers={listOffers}
              cardClassName="cities"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            />
          </section>
          <div className="cities__right-section">
            <Map selectedCard={selectedCard} offers={listOffers} city={selectedCity} className='cities' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
