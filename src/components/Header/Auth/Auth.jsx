import style from './Auth.module.css';
import { ReactComponent as EnterSvg } from './img/enter.svg';
import { ReactComponent as ExitSvg } from './img/exit.svg';
import { urlAuth } from '../../../api/auth.js';
// import { useToken } from '../../../hooks/useToken.js';
// import { useAuth } from '../../../hooks/useAuth.js';
import PropTypes from 'prop-types';

export const Auth = ({ delToken, auth, clearAuth }) => {
  // const [token, delToken] = useToken('');
  // const [auth, clearAuth] = useAuth(token);

  const handleExitUser = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.wrapper}>
      {auth.name ? (
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

Auth.propTypes = {
  delToken: PropTypes.func,
  auth: PropTypes.object,
  clearAuth: PropTypes.func,
};
