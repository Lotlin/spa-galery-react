import Header from './components/Header';
import Main from './components/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';

const App = () => {
  console.log('App');

  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header />
        <Main />
      </AuthContextProvider>
    </TokenContextProvider>
  );
};

export default App;
