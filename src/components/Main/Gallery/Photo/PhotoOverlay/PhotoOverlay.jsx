import style from './PhotoOverlay.module.css';
import propTypes from 'prop-types';
import Date from '../../../../Date';
import Likes from '../../../../Likes';
import PhotoAuthor from './PhotoAuthor';

export const PhotoOverlay = ({ author, authorLink, date, likes }) => (
  <div className={style.overlay}>
    <PhotoAuthor author={author} authorLink={authorLink}/>
    <Date date={date} />
    <Likes likes={likes} />
  </div>
);

PhotoOverlay.propTypes = {
  author: propTypes.string,
  authorLink: propTypes.string,
  date: propTypes.string,
  likes: propTypes.number,
};
