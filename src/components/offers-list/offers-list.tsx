import Card from '../card/card';
import { TypeOffer } from '../../types/offers';
import { useState } from 'react';

type OffersListProps = {
  offers: TypeOffer[];
  cardClassName: string;
}

function OffersList({ offers, cardClassName }: OffersListProps) {
  const isFavorites = cardClassName === 'favorites';
  const [card, setCard] = useState<string | null>(null);

  const handleMouseOver = (id: string) => {
    setCard(id);
  };

  const handleMouseLeave = () => {
    setCard(null);
  };

  return (
    <div className={`${isFavorites ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => (
        <Card key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
          onMouseOver={() => handleMouseOver(offer.id)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </div>
  );
}

export default OffersList;
