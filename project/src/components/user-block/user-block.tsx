import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormEvent} from 'react';
import { logoutAction } from '../../store/api-actions';

function UserBlock():JSX.Element{

  const avatarUrl = useAppSelector((state) => state.avatarUrl);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());

  };

  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {(authorizationStatus === 'AUTH')
            ?
            <
              img
              src={avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
            : ''}
        </div>
      </li>
      <li className="user-block__item">
        {(authorizationStatus === 'AUTH')
          ?
          <button
            className="user-block__link"
            onClick={handleClick}
          >Sign out
          </button>
          :
          <button
            className="user-block__link"
            onClick={() => navigate(AppRoute.Login)}
          >Sign in
          </button>}

      </li>
    </ul>
  );
}
export default UserBlock;
