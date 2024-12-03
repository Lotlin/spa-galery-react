import style from './AuthBtn.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as EnterSvg } from './img/enter.svg';
import { ReactComponent as ExitSvg } from './img/exit.svg';


export const AuthBtn = ({ isAuth }) => (
  <button
    className={style.btn}
    aria-label={isAuth ? 'Выйти из аккаунта' : 'Войти в аккаунт'}
  >
    {
    isAuth ?
      <ExitSvg className={style.svg}/> :
      <EnterSvg className={style.svg}/>
    }
  </button>
);

AuthBtn.propTypes = {
  isAuth: PropTypes.bool,
};
