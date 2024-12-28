import Card from '../card/card';
import { TypeOffer } from '../../types/offers';

type OffersListProps = {
  offers: TypeOffer[];
}

function OffersList({ offers }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}

export default OffersList;
