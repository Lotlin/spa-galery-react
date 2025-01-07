import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store/idex.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhotoDetails from './components/Main/PhotoDetails';

const App = () => {
  console.log('APP');

  // toDO проверить рендеринг Header 1 раз на всех

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={
            <Main />
          } />
          <Route path='/photo/:id' element={
            <PhotoDetails />
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
