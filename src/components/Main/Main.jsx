import Gallery from './Gallery';
import Layout from '../Layout';
import style from './Main.module.css';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Gallery />
    </Layout>
  </main>
);
