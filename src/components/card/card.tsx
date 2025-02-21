import { TypeOffer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/utils';


type CardProps = {
  offer: TypeOffer;
  onMouseOver?: (id: string) => void;
  onMouseLeave?: () => void;
  cardClassName?: string;
};

function Card({ offer, cardClassName, onMouseOver, onMouseLeave }: CardProps) {
  const isFavorites = cardClassName === 'favorites';
  const imageWidth = isFavorites ? 150 : 260;
  const imageHeight = isFavorites ? 110 : 200;

  return (
    <article
      className={`${cardClassName}__card place-card`}
      onMouseOver={onMouseOver ? () => onMouseOver(offer.id) : undefined}
      onMouseLeave={onMouseLeave ? () => onMouseLeave() : undefined}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${cardClassName}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`place-card__info ${
          isFavorites ? 'favorites__card-info' : ''
        }`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorites ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              `{isFavorites ? 'In' : 'To'}` bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default Card;
