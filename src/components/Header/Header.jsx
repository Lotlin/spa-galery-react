import Auth from './Auth';
import Layout from '../Layout';
import Logo from './Logo';
import style from './Header.module.css';
import PropTypes from 'prop-types';

export const Header = ({ from }) => (
  <header className={style.header}>
    <Layout>
      <div className={style.flexContainer}>
        <Logo from={from}/>
        <Auth />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  from: PropTypes.string,
};
