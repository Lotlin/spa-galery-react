import style from './Like.module.css';
import propTypes from 'prop-types';

export const Like = ({ likes, likedByUser }) => {
  console.log('like');

  return (
    <p className= {`${style.container} ${likedByUser ? style.liked : ''}`}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3
            7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58
            3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
          stroke="red"
          strokeWidth="1"
        />
      </svg>
      <span className={style.count}>{likes}</span>
    </p>
  );
};

Like.propTypes = {
  likes: propTypes.number,
  likedByUser: propTypes.bool,
};