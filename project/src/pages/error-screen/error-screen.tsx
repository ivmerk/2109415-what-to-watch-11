import {useAppDispatch} from '../../hooks';
import { loadFilmsAction } from '../../store/api-actions';

function ErrorScreen(): JSX.Element {

  const onClickHandle = () => {
    dispatch(loadFilmsAction());
  };
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить фильмы</p>
      <button
        onClick={onClickHandle}
        className="replay replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
