import Card from '../card/card';
import { TypeOffer } from '../../types/offers';
import { useState } from 'react';

type OffersListProps = {
  offers: TypeOffer[];
}

function OffersList({ offers }: OffersListProps) {

  const [card, setCard] = useState<string | null>(null);

  const handleMouseOver = (id: string) => {
    setCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseOver={() => handleMouseOver(offer.id)}/>
      ))}
    </div>
  );
}

export default OffersList;
