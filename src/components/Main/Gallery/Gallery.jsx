import style from './Gallery.module.css';
import Photo from './Photo';
import { useAllPhotos } from '../../../hooks/useAllPhotos.js';

export const Gallery = () => {
  const allPhotosData = useAllPhotos();

  return (
    <ul className={style.list}>
      {allPhotosData.map((photoData) => (
        <Photo key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};
