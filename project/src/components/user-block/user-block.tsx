import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormEvent} from 'react';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function UserBlock():JSX.Element{

  const avatarUrl = useAppSelector((state) => state.avatarUrl);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let userBlockTitle = '';
  if (authorizationStatus === 'AUTH') {
    userBlockTitle = 'Sign out';} else {
    userBlockTitle = 'Sign in';
  }

  const handleClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (authorizationStatus === 'AUTH') {
      dispatch(logoutAction());
      userBlockTitle = 'Sign in';} else {
      navigate(AppRoute.Login);
      userBlockTitle = 'Sign out';
    }

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
        <button
          className="user-block__link"
          onClick={handleClick}
        >{userBlockTitle}
        </button>

      </li>
    </ul>
  );
}
export default UserBlock;
