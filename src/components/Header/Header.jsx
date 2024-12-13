import Auth from './Auth';
import Layout from '../Layout';
import Logo from './Logo';
import style from './Header.module.css';

export const Header = () => {
  console.log('Header');

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.flexContainer}>
          <Logo />
          <Auth />
        </div>
      </Layout>
    </header>
  );
};
