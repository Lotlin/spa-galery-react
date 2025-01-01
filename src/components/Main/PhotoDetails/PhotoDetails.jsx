import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Layout } from '../../Layout/Layout.jsx';
import style from './PhotoDetails.module.css';
// toDO сделать самостоятельным компонентом
import PhotoAuthor
  from '../Gallery/Photo/PhotoOverlay/PhotoAuthor';
import Like from '../../Like';
import Date from '../../Date';

export const PhotoDetails = () => {
  const auth = useSelector(state => state.auth);
  const { id } = useParams();
  const photoData = useSelector(state =>
    state.allPhotos.data.find(photo => photo.id === id));

  const {
    alt_description: alt,
    urls,
    user,
    created_at: date,
    likes,
    liked_by_user: likedByUser,
  } = photoData;

  const author = `${user['first_name']} ${user['last_name']}`;
  const authorLink = user.links.self;

  const likeBtnHandler = () => {
    console.log(12);
  };

  return (
    <Layout>
      <div className={style.wrapper}>
        <img className={style.img} src={urls.full} alt={alt} />
        <div className={style.info}>
          <PhotoAuthor author={author} authorLink={authorLink}/>
          <Date date={date} />
          {Object.keys(auth.data).length ?
            <button className={style.btn} onClick={likeBtnHandler}>
              <Like likes={likes} likedByUser={likedByUser} blackText={true}/>
            </button> :
            <Like likes={likes} likedByUser={likedByUser} blackText={true}/>
          }
        </div>
      </div>
    </Layout>
  );
};
