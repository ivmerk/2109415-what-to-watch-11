import { Comment } from '../../../types/moviescards';
import { formatStringToDate } from '../../../utils/utils';

type ReviewsTop = {
  comments: Comment[];
}
function Reviews({comments} :ReviewsTop): JSX.Element {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime={formatStringToDate(comment.date)}>{formatStringToDate(comment.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );}

export default Reviews;
