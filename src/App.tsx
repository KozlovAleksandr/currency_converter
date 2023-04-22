import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RatesPage from './pages/RatesPage';
import ConverterPage from './pages/ConverterPage';
import styles from './App.module.scss';
import { Container } from '@mui/material';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md" className={styles.container}>
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<RatesPage />} />
            <Route path="/converter" element={<ConverterPage />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
