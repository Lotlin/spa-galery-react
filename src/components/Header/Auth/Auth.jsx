import style from './Auth.module.css';
import { ReactComponent as EnterSvg } from './img/enter.svg';
import { ReactComponent as ExitSvg } from './img/exit.svg';
import { urlAuth } from '../../../api/auth.js';
import { useContext } from 'react';
import { tokenContext } from '../../../context/tokenContext.js';
import { authContext } from '../../../context/authContext.js';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const { auth, clearAuth } = useContext(authContext);

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
