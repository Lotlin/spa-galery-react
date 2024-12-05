import style from './PhotoImg.module.css';
import PropTypes from 'prop-types';
import noPhoto from './img/noPhoto.jpg';

export const PhotoImg = ({ title, thumbnail }) => {
  const srcImg = thumbnail.startsWith('http') ? thumbnail : noPhoto;

  return (
    <img className={style.img} src={srcImg} alt={title} />
  );
};

PhotoImg.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
