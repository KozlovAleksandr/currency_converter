import { Button, Grid } from '@mui/material';
import SelectCurrency from '../components/SelectCurrency';
import { useEffect, useState } from 'react';
import { currencyAPI } from '../api/apiRequest';
import RatesTable from '../components/RatesTable';
import { RatesResponce } from '../types/types';
import getLog from '../utils/getLog';

const RatesPage: React.FC = (): JSX.Element => {
  const [baseCurrency, setBaseCurrency] =
    useState<string>('RUB, Russian Ruble');
  const [rates, setRates] = useState<RatesResponce>({});

  const fetchRequest = () => {
    currencyAPI.getRates(baseCurrency).then((res) => {
      if (res !== undefined) {
        getLog(res);
        setRates(res);
      }
    });
  };

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchRequest();
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <SelectCurrency
            value={baseCurrency}
            setValue={setBaseCurrency}
            label="Валюта"
          />
        </Grid>

        <Grid item xs={2} sx={{ margin: 'auto' }}>
          <Button variant="contained" disableElevation onClick={fetchRequest}>
            Обновить
          </Button>
        </Grid>

        <Grid item xs={8} sx={{ margin: 'auto' }}>
          <RatesTable rates={rates} />
        </Grid>
      </Grid>
    </main>
  );
};

export default RatesPage;
