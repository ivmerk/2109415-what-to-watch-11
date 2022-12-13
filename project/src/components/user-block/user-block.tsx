import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormEvent} from 'react';
import { logOutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user-process/selectors';

function UserBlock():JSX.Element{

  const avatarUrl = useAppSelector(getAvatarUrl);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let userBlockTitle = '';
  if (authorizationStatus === AuthorizationStatus.Auth) {
    userBlockTitle = 'Sign out';} else {
    userBlockTitle = 'Sign in';
  }

  const handleClick = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logOutAction());
      userBlockTitle = 'Sign in';} else {
      navigate(AppRoute.SingIn);
      userBlockTitle = 'Sign out';
    }

  };

  const avatarClickHandle = () => {
    navigate(AppRoute.MyList);
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
              onClick={avatarClickHandle}
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
