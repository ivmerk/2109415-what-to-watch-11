import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArray } from '../../utils/utils';
import {CommentData} from '../../types/comment-data';
import { useAppDispatch } from '../../hooks';
import { postRewiewAction } from '../../store/api-actions';
import { RATING_COUNT } from '../../const';

const ratingStars:number[] = getArray(RATING_COUNT);


function AddReview():JSX.Element{
  const params = useParams();
  const filmId = params.id;
  const dispatch = useAppDispatch();

  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [userRating, setUserRating] = useState(6);

  const onClickHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setUserRating(Number(evt.currentTarget.value));

  };

  const onSubmit = (commentData: CommentData) => {
    dispatch(postRewiewAction(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (commentRef.current !== null && filmId){
      onSubmit({
        comment: commentRef.current.value,
        rating: userRating,
        id: filmId,
      });
    }
  };

type ShowStarProps = {
  item: number;
}
function ShowStar({item }:ShowStarProps):JSX.Element{
  return(
    <>
      <input
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}
        checked={userRating === item}
        onChange={onClickHandle}
      />
      <label
        className="rating__label"
        htmlFor={`star-${item}`}
      >
        Rating {item}
      </label>
    </>
  );}
return(
  <div className="add-review">
    <form
      action=""
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {ratingStars.map((item) => (
            <ShowStar item={item} key={(item).toString()}/>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          ref={commentRef}
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
