import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNav from './pages/layout/MyNav.tsx';
import MainPage from './pages/MainPage.tsx';
import OtherPage from './pages/OtherPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />

        <Routes>

          <Route path="/" element={ <MainPage /> } />

          <Route path="/other-page" element={ <OtherPage /> } />

          <Route path="*" element={ <NotFoundPage /> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}
