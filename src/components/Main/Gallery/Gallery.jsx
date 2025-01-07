import style from './Gallery.module.css';
import Photo from './Photo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPostsRequestAsync } from '../../../store/allPhotos/action.js';

export const Gallery = () => {
  // const token = useSelector(state => state.token.token);
  const allPhotosData = useSelector(state => state.allPhotos.data);
  console.log('allPhotosData : ', allPhotosData);
  /* const uniquePhotos =
    Array.from(new Map(allPhotosData.map(photo =>
    [photo.id, photo])).values());*/
  const dispatch = useDispatch();
  // const hasMore = useSelector(state => state.allPhotos.hasMore);
  // const loading = useSelector(state => state.allPhotos.loading);

  /* useEffect(() => {
    if (hasMore) {
      dispatch(allPostsRequestAsync());
    }
  }, []);*/
  useEffect(() => {
    if (allPhotosData.length === 0) {
      dispatch(allPostsRequestAsync());
    }
  }, [dispatch, allPhotosData.length]);

  /* const handleScroll = () => {
    console.log('handleScroll');
    if (window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100) {
      if (!loading && hasMore) {
        dispatch(allPostsRequestAsync());
      }
    }
  };*/

  /* useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);*/

  return (
    <ul className={style.list}>
      {allPhotosData.map((photoData) => (
        <Photo key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};
