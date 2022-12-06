import { useAppDispatch } from '../../hooks';
import { increaseRenderingFilmsCount } from '../../store/action';
import { FILM_COUNT_PER_STEP} from '../../const';

function ShowMoreButton(){
  const dispatch = useAppDispatch();
  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={()=>{dispatch(increaseRenderingFilmsCount(FILM_COUNT_PER_STEP));}}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
