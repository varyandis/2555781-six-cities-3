import { TypeOffer } from '../../types/offers';
import OffersList from '../offers-list/offers-list';

type FavoritiesListProps = {
  offers: TypeOffer[];
  city: string;
}

function FavoritiesList({offers, city} : FavoritiesListProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList offers={offers} cardClassName="favorites" />
      </div>
    </li>
  );
}

export default FavoritiesList;
