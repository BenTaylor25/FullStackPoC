import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import OtherPage from './pages/OtherPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

export default function App() {
  return (
    <>
      {/* <myNav /> */}

      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <MainPage /> } />

          <Route path="/other-page" element={ <OtherPage /> } />

          <Route path="*" element={ <NotFoundPage /> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}
