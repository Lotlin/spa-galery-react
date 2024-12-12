import style from './AuthBtn.module.css';
import { ReactComponent as EnterSvg } from './img/enter.svg';
import { ReactComponent as ExitSvg } from './img/exit.svg';
import { urlAuth } from '../../../api/auth.js';
import { useToken } from '../../../hooks/useToken.js';

export const AuthBtn = () => {
  const [token, delToken] = useToken('');

  return token ? (
    <button
      className={style.btn}
      onClick={delToken}
    >
      <>
        <ExitSvg className={style.svg} />
        <span>Выйти</span>
      </>
    </button>
  ) : (
  <a className={style.link} href={urlAuth}>
    <EnterSvg className={style.svg}/>
    <span>Войти</span>
  </a>
  );
};
