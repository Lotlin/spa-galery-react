import style from './Photo.module.css';
import PropTypes from 'prop-types';
import PhotoOverlay from './PhotoOverlay';
import PhotoLink from './PhotoLink';

export const Photo = ({ photoData }) => {
  // console.log('photoData: ', photoData);
  const {
    alt_description: alt,
    urls,
    user,
    created_at: date,
    likes,
    liked_by_user: likedByUser,
    id,
  } = photoData;

  return (
    <li className={style.item}>
      <PhotoLink alt={alt} urls={urls} id={id}/>
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
