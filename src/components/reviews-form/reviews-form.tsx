import { ReactEventHandler, useState } from 'react';
import React from 'react';

const ratingReview = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

export type TypeHandleForm = {
  event: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function ReviewsForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (event: TypeHandleForm) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (event: TypeHandleForm) => {
    setReview(event.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post" >
      <label className="reviews__label form__label" htmlFor="review">
  Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingReview.map((value) => (
          <React.Fragment key={value.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value.value}
              id={`${value.value}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={`${value.title}`}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
    To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
    your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < 50 && rating > 0}
        >
    Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
