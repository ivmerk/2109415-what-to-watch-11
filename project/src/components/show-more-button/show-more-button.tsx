import { useAppDispatch } from '../../hooks';
import { increaseRenderingFilmsCount } from '../../store/film-process/film-process';
import { FILM_COUNT_PER_STEP} from '../../const';
import { useCallback } from 'react';

function ShowMoreButton(){
  const dispatch = useAppDispatch();

  const onClickHandle = useCallback(() =>
    dispatch(increaseRenderingFilmsCount(FILM_COUNT_PER_STEP)), [dispatch]);


  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickHandle}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
