import { Grid, IconButton } from '@mui/material';
import InputCurrency from '../components/InputCurrency';
import SelectCurrency from '../components/SelectCurrency';
import { RiExchangeFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { currencyAPI } from '../api/apiRequest';
import styles from './index.module.scss';

const ConverterPage = () => {
  const [baseCurrency, setBaseCurrency] =
    useState<string>('RUB, Russian Ruble');
  const [targetCurrency, setTargetCurrency] = useState<string>(
    'USD, United States Dollar'
  );

  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    currencyAPI.getPairConversion(baseCurrency, targetCurrency).then((res) => {
      if (res !== undefined) {
        setResult(res * amount);
      }
    });
  }, [baseCurrency, targetCurrency, amount]);

  const swap = () => {
    const temporaryCurrency = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temporaryCurrency);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputCurrency
            quantum={amount}
            setAmoutValue={setAmount}
            label="Сумма"
          />
        </Grid>
        <Grid item xs={5.5}>
          <SelectCurrency
            value={baseCurrency}
            setValue={setBaseCurrency}
            label="Продажа"
          />
        </Grid>

        <Grid item xs={1}>
          <IconButton onClick={swap} color="primary">
            <RiExchangeFill size={37} />
          </IconButton>
        </Grid>

        <Grid item xs={5.5}>
          <SelectCurrency
            value={targetCurrency}
            setValue={setTargetCurrency}
            label="Покупка"
          />
        </Grid>
        <Grid item xs={12}>
          <InputCurrency
            quantum={result !== 0 ? result : 0}
            isReadOnly={true}
            label="Итог"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ConverterPage;
