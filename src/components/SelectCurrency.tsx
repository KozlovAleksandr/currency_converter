import { Autocomplete, TextField } from '@mui/material';
import { SelectCurrencyProps } from '../types/types';
import { currencyAPI } from '../api/apiRequest';
import { useEffect, useState } from 'react';

const SelectCurrency = ({ value, setValue, label }: SelectCurrencyProps) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    currencyAPI.getCurrencyCodes().then((res) => {
      const currencies = res.map((currency: string[]) => {
        return `${currency[0]}, ${currency[1]}`;
      });
      setCurrencies(currencies);
    });
  }, []);

  return (
    <Autocomplete
      value={value}
      onChange={(_event: React.SyntheticEvent, newValue: string | null) => {
        setValue(newValue);
      }}
      options={currencies}
      isOptionEqualToValue={(option, value) => option === value}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectCurrency;
