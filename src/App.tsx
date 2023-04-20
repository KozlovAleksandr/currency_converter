import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ConverterPage from './pages/ConverterPage';
import styles from './App.module.scss';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/converter" element={<ConverterPage />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
