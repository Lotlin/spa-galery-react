import Auth from './Auth';
import Layout from '../Layout';
import Logo from './Logo';
import style from './Header.module.css';
import { useAuth } from '../../hooks/useAuth.js';
import { useToken } from '../../hooks/useToken.js';

export const Header = () => {
  const [token, delToken] = useToken('');
  const [auth, clearAuth] = useAuth(token);

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.flexContainer}>
          <Logo />
          <Auth delToken={delToken} auth={auth} clearAuth={clearAuth} />
        </div>
      </Layout>
    </header>
  );
};
