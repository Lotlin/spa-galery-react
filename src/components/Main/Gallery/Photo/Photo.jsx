import style from './Photo.module.css';
import PropTypes from 'prop-types';
import PhotoImg from './PhotoImg';
import PhotoOverlay from './PhotoOverlay';

export const Photo = ({ photoData }) => {
  // console.log('photoData: ',
  const {
    alt_description: alt,
    urls,
    user,
    created_at: date,
    likes,
    liked_by_user: likedByUser
  } = photoData;

  return (
    <li className={style.item}>
      <PhotoImg alt={alt} urls={urls} />
      <PhotoOverlay
        user={user}
        date={date}
        likes={likes}
        likedByUser={likedByUser}
      />
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object.isRequired
};
