import {useAppDispatch} from '../../hooks';
import { loadFilmsAction } from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить фильмы</p>
      <button
        onClick={() => {
          dispatch(loadFilmsAction());
        }}
        className="replay replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
