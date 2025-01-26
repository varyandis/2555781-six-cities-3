import FavoritiesList from '../../components/favorites-list/favorities-list';
import { TypeOffer } from '../../types/offers';

type FavoritesScreenProps = {
  offers: TypeOffer[];
}

function FavoritesScreen({offers} : FavoritesScreenProps) : JSX.Element {

  const favoritiesOffers = offers.filter((offer) => offer.isFavorite);

  const groupedByCity = favoritiesOffers.reduce<Record<string, TypeOffer[]>>((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {});

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedByCity).map(([city, offersList]) => (
                <FavoritiesList key={city} city={city} offers={offersList}/>
              ))}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </>
  );
}

export default FavoritesScreen;
