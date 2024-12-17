import Header from './components/Header';
import Main from './components/Main';
import { TokenContextProvider } from './context/tokenContext';
import { AuthContextProvider } from './context/authContext';
import { Provider } from 'react-redux';
import { store } from './store/idex.js';

const App = () => {
  console.log('APP');

  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <Header />
          <Main />
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
};

export default App;
