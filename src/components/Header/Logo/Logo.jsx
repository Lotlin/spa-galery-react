import style from './Logo.module.css';
import { ReactComponent as UnsplashIcon } from './img/unsplash.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Logo = ({ from }) => (
  <Link className={style.link} to='/' state={{ from }}>
    <UnsplashIcon className={style.icon} />
  </Link>
);

Logo.propTypes = {
  from: PropTypes.string,
};

