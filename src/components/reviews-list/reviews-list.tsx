import { TypeComment } from '../../types/comments';
import ReviewsForm from '../reviews-form/reviews-form';
import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: TypeComment[];
}

export default function ReviewsList({ comments }: ReviewsListProps) {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((comment) =>
          <ReviewsItem key={comment.id} comment={comment} />
        )}
      </ul>
      <ReviewsForm />
    </section>
  );
}
