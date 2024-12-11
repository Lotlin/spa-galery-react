import style from './PhotoImg.module.css';
import PropTypes from 'prop-types';
import noPhoto from './img/noPhoto.jpg';

export const PhotoImg = ({ alt, urls }) => {
  const srcImg = urls?.small ? urls.small : noPhoto;
  return <img className={style.img} src={srcImg} alt={alt} />;
};

PhotoImg.propTypes = {
  alt: PropTypes.string,
  urls: PropTypes.object
};
