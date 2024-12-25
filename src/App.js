import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store/idex.js';

const App = () => {
  console.log('APP');

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
