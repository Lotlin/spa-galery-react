import style from './Gallery.module.css';
import Photo from './Photo';

// toDo убрать папку img

export const Gallery = () => {
  const allPhotosdata = [
    {
      thumbnail: '',
      title: 'name',
      author: 'Nickname1',
      authorLink: '#',
      likes: 77,
      date: '2022-01-21T10:45:00.000Z',
      id: 1,
    },
    {
      thumbnail: '',
      title: 'name1',
      author: 'Nickname2',
      authorLink: '#',
      likes: 750,
      date: '2024-01-21T10:45:00.000Z',
      id: 2,
    },
    {
      thumbnail: '',
      title: 'name2',
      author: 'Nickname3',
      authorLink: '#',
      likes: 177,
      date: '2021-01-21T10:45:00.000Z',
      id: 3,
    },
    {
      thumbnail: '',
      title: 'name3',
      author: 'Nickname4',
      authorLink: '#',
      likes: 277,
      date: '2025-01-21T10:45:00.000Z',
      id: 4,
    },
    {
      thumbnail: '',
      title: 'name',
      author: 'Nickname1',
      authorLink: '#',
      likes: 77,
      date: '2022-01-21T10:45:00.000Z',
      id: 5,
    },
    {
      thumbnail: '',
      title: 'name1',
      author: 'Nickname1',
      authorLink: '#',
      likes: 750,
      date: '2024-01-21T10:45:00.000Z',
      id: 6,
    },
    {
      thumbnail: '',
      title: 'name2',
      author: 'Nickname1',
      authorLink: '#',
      likes: 177,
      date: '2021-01-21T10:45:00.000Z',
      id: 7,
    },
    {
      thumbnail: '',
      title: 'name3',
      author: 'Nickname1',
      authorLink: '#',
      likes: 277,
      date: '2025-01-21T10:45:00.000Z',
      id: 8,
    },
  ];

  return (
    <ul className={style.list}>
      {allPhotosdata.map((photoData) => (
        <Photo key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};
