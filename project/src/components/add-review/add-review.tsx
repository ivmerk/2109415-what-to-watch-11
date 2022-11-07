import { useState } from 'react';
// import { MovieCard } from '../../types/moviescards';
import { getArray } from '../../utils/utils';

const RATINGCOUNT = 10;
const ratingStars:number[] = getArray(RATINGCOUNT);

type AddReviewProps = {
  // filmTop: MovieCard;
}

function AddReview( props:AddReviewProps):JSX.Element{

  // const{filmTop} = props;

  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(6);

  return(
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            {ratingStars.map((item) => (
              <>
                <input
                  className="rating__input"
                  id={`star-${item}`}
                  type="radio"
                  name="rating"
                  value={item}
                  checked={userRating === item}
                  onClick={(evt) => {
                    setUserRating(Number(evt.currentTarget.value));
                  }}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${item}`}
                >
                    Rating {item}
                </label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={userComment}
            onChange={(evt) =>
              setUserComment(evt.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>

  );
}

export default AddReview;
