import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store/idex.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhotoDetails from './components/Main/PhotoDetails';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
          </>
        } />
        <Route path='/photo/:id' element={
          <>
            <Header from={'photo'} />
            <PhotoDetails />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
