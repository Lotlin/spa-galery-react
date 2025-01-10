import style from './PhotoOverlay.module.css';
import propTypes from 'prop-types';
import Date from '../../../../Date';
import Like from '../../../../Like';
import PhotoAuthor from '../../../PhotoAuthor';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteLikeRequestAsync,
  putLikeRequestAsync,
} from '../../../../../store/like/action.js';

export const PhotoOverlay = ({ user, date, likes, likedByUser, id }) => {
  const author = `${user['first_name']} ${user['last_name']}`;
  const authorLink = user.links.html;
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const likeBtnHandler = () => {
    if (likedByUser) {
      dispatch(deleteLikeRequestAsync(id));
    } else {
      dispatch(putLikeRequestAsync(id));
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <PhotoAuthor author={author} authorLink={authorLink}/>
      </div>
      <div className={style.wrapper}>
        <Date date={date} />
        {token ?
          <button className={style.btn} onClick={likeBtnHandler}>
            <Like likes={likes} likedByUser={likedByUser}/>
          </button> :
          <Like likes={likes} likedByUser={likedByUser}/>
        }
      </div>
    </div>
  );
};

PhotoOverlay.propTypes = {
  user: propTypes.object,
  date: propTypes.string,
  likes: propTypes.number,
  likedByUser: propTypes.bool,
  id: propTypes.string,
};
