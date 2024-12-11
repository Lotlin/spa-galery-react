import style from './AuthBtn.module.css';
import { ReactComponent as EnterSvg } from './img/enter.svg';
// import { ReactComponent as ExitSvg } from './img/exit.svg';
import { urlAuth } from '../../../api/auth.js';

export const AuthBtn = () => {
  console.log('auth');

  return (
    <button
      className={style.btn}
      aria-label={'Войти в аккаунт'}
    >
      <a className={style.link} href={urlAuth}>
        <EnterSvg className={style.svg}/>
        <span>Войти</span>
      </a>
    </button>
  );
};
