import { TypeComment } from '../../types/comments';
import { getDateToISODate, getDateToMonthYear } from '../../utils/utils';

type ReviewsItemProps = {
  comment: TypeComment;
}

export function ReviewsItem({ comment }: ReviewsItemProps) {

  const imageWidth = 54;
  const imageHeight = 54;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width={imageWidth}
            height={imageHeight}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${comment.rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={getDateToISODate(comment.date)}>
          {getDateToMonthYear(comment.date)}
        </time>
      </div>
    </li>
  );
}
