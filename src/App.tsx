import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
          <Route path="/" exact component={RatesPage} />
          <Route path="/converter" component={ConverterPage} />
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
