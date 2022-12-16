import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import {useRef, FormEvent, useState, ChangeEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {logInAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import { AppRoute } from '../../const';

function SignInScreen():JSX.Element{
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validPassword, setValidPassword] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    if (validPassword) {
      dispatch(logInAction(authData));
      navigate(AppRoute.Main);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const onKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      setValidPassword(/[0-9]/.test(passwordRef.current.value) && /[A-Za-z]/.test(passwordRef.current.value));
    }
  };

  return(
    <div className="user-page">
      <Helmet>
        <title>WTW.Sing In</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                onChange={onKeyDownCaptureHandle}
                placeholder="Password"
                style={(validPassword) ? {borderColor:'green'} : {borderColor:'red'}}
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo name={'logo__link--light'}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
