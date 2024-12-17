import style from './PhotoLink.module.css';
import PhotoImg from '../PhotoImg';
import PropTypes from 'prop-types';

export const PhotoLink = ({ alt, urls, id }) => (
  // toDo сделать переход на страницу с информацией о фото
  <a className={style.link} href='#'>
    <PhotoImg alt={alt} urls={urls} />
  </a>
);

PhotoLink.propTypes = {
  alt: PropTypes.string,
  urls: PropTypes.object,
  id: PropTypes.string.isRequired,
};

