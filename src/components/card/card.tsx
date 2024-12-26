import { TypeOffer } from '../../types/offers';

const offer: TypeOffer = {
  'id': 'a933e14b-1749-4c4a-bf86-87efb366f3d6',
  'title': 'Wood and stone place',
  'type': 'apartment',
  'price': 398,
  'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.868610000000004,
    'longitude': 2.342499,
    'zoom': 16
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 1.2
};

type CardProps = {
  offer: TypeOffer;
}

// function Card({offer} : CardProps) {
function Card() {
  return (
    <article className="cities__card place-card">
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
