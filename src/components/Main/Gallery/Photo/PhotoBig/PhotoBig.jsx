import style from './PhotoBig.module.css';
import PropTypes from 'prop-types';
import PhotoImg from '../PhotoImg';
import PhotoOverlay from '../PhotoOverlay';

export const PhotoBig = ({ photoData }) => {
  const {
    alt_description: alt,
    urls,
    user,
    created_at: date,
    likes,
    liked_by_user: likedByUser
  } = photoData;

  return (
    <a className={style.link} href={urls.full}>
      <PhotoImg alt={alt} urls={urls} />
      <PhotoOverlay
        user={user}
        date={date}
        likes={likes}
        likedByUser={likedByUser}
      />
    </a>
  );
};

PhotoBig.propTypes = {
  photoData: PropTypes.object.isRequired
};

