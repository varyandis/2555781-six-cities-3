import Card from '../card/card';
import { TypeOffer } from '../../types/offers';

type OffersListProps = {
  offers: TypeOffer[];
  cardClassName?: string;
  onMouseOver?: (id: string) => void;
  onMouseLeave?: () => void;
}

function OffersList({ offers, cardClassName, onMouseOver, onMouseLeave }: OffersListProps) {
  const isFavorites = cardClassName === 'favorites';

  return (
    <div className={`${isFavorites ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;
