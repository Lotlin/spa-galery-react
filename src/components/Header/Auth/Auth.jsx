import style from './Auth.module.css';
import { ReactComponent as EnterSvg } from './img/enter.svg';
import { ReactComponent as ExitSvg } from './img/exit.svg';
import { urlAuth } from '../../../api/auth.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToken, updateToken } from '../../../store/tokenReducer.js';
import { getToken } from '../../../api/token.js';
import { useAuth } from '../../../hooks/useAuth.js';
import AuthLoader from './AuthLoader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [auth, loading, clearAuth] = useAuth();

  const handleExitUser = () => {
    dispatch(deleteToken());
    clearAuth();
    localStorage.removeItem('Bearer');
  };

  useEffect(() => {
    const fetchAndSaveToken = async () => {
      const token = localStorage.getItem('Bearer');
      if (token) {
        dispatch(updateToken(token));
        return;
      }

      const fetchedToken = await getToken();
      if (fetchedToken) {
        dispatch(updateToken(fetchedToken));
      }
    };

    fetchAndSaveToken();
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      {loading ?
        (<AuthLoader />) :
        auth.name ? (
      <>
        <p className={style.greeting}>{`Привет, ${auth.name}!`}</p>
        <button
          className={style.btn}
          onClick={handleExitUser}
        >
          {auth.avatar ? (
            <img
              className={style.avatar}
              src={auth.avatar}
              title={auth.name}
              alt={`Аватар пользователя ${auth.name}`} />
          ) :
            <ExitSvg className={style.svg} />}
          <span>Выйти</span>
        </button>
      </>
    ) : (
      <a className={style.link} href={urlAuth}>
        <EnterSvg className={style.svg}/>
        <span>Войти</span>
      </a>
    )}
    </div>
  );
};
