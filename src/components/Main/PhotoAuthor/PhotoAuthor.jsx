import style from './PhotoAuthor.module.css';
import PropTypes from 'prop-types';

export const PhotoAuthor = ({ author, authorLink }) => (
  <a className={style.link} href={authorLink}>{author}</a>
);

PhotoAuthor.propTypes = {
  author: PropTypes.string,
  authorLink: PropTypes.string,
};
