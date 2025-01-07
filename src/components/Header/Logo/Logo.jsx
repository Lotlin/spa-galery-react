import style from './Logo.module.css';
import { ReactComponent as UnsplashIcon } from './img/unsplash.svg';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link className={style.link} to='/'>
    <UnsplashIcon className={style.icon} />
  </Link>
);
