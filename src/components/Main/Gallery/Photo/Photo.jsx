import style from './Photo.module.css';
import propTypes from 'prop-types';

import PhotoImg from './PhotoImg';

import PhotoOverlay from './PhotoOverlay';

export const Photo = ({ photoData }) => {
  const { thumbnail, title, ...rest } = photoData;
  return (
    <li className={style.item}>
      <PhotoImg title={title} thumbnail={thumbnail}/>
      <PhotoOverlay {...rest} />
    </li>
  );
};


Photo.propTypes = {
  photoData: propTypes.object
};
