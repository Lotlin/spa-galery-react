import style from './Gallery.module.css';
import Photo from './Photo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPostsRequestAsync } from '../../../store/allPhotos/action.js';

export const Gallery = () => {
  const allPhotosData = useSelector(state => state.allPhotos.data);
  const loading = useSelector(state => state.allPhotos.loading);
  const hasMore = useSelector(state => state.allPhotos.hasMore);
  const uniquePhotos =
    Array.from(new Map(allPhotosData.map(photo =>
      [photo.id, photo])).values());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allPhotosData.length) {
      dispatch(allPostsRequestAsync());
    }
  }, [dispatch, allPhotosData.length]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      hasMore &&
      !loading
    ) {
      dispatch(allPostsRequestAsync());
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, hasMore, loading]);

  return (
    <ul className={style.list}>
      {uniquePhotos.map((photoData) => (
        <Photo key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};
