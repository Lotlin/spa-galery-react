import AuthBtn from './AuthBtn';
import Layout from '../Layout';
import Logo from './Logo';
import style from './Header.module.css';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.flexContainer}>
        <Logo />
        <AuthBtn />
      </div>
    </Layout>
  </header>
);
