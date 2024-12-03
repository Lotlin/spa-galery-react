import style from './Logo.module.css';
import { ReactComponent as UnsplashIcon } from './img/unsplash.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <UnsplashIcon className={style.icon} />
  </a>
);
