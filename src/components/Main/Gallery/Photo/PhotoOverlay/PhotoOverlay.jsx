import style from './PhotoOverlay.module.css';
import propTypes from 'prop-types';
import Date from '../../../../Date';
import Like from '../../../../Like';
import PhotoAuthor from './PhotoAuthor';

export const PhotoOverlay = ({ user, date, likes, likedByUser }) => {
  const author = `${user['first_name']} ${user['last_name']}`;
  const authorLink = user.links.self;

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <PhotoAuthor author={author} authorLink={authorLink}/>
      </div>
      <div className={style.wrapper}>
        <Date date={date} />
        <Like likes={likes} likedByUser={likedByUser}/>
      </div>
    </div>
  );
};

PhotoOverlay.propTypes = {
  user: propTypes.object,
  date: propTypes.string,
  likes: propTypes.number,
  likedByUser: propTypes.bool,
};
