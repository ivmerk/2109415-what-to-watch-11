import { useAppDispatch } from '../../hooks';
import { increaseRenderingFilmsCount } from '../../store/action';
import { FILM_COUNT_PER_STEP} from '../../const';

function ShowMoreButton(){
  const dispatch = useAppDispatch();

  function onClickHandle(){
    dispatch(increaseRenderingFilmsCount(FILM_COUNT_PER_STEP));
  }

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
