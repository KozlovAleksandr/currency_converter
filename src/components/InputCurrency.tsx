import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { GrMoney } from 'react-icons/gr';
import { InputCurrencyProps } from '../types/types';

const InputCurrency: React.FC<InputCurrencyProps> = ({
  quantum,
  label,
  setAmoutValue,
  isReadOnly,
}): JSX.Element => {
  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <GrMoney />
            </InputAdornment>
          }
          label="Amount"
          type="number"
          value={quantum}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAmoutValue(event.target.value);
          }}
          readOnly={isReadOnly}
          color="primary"
        />
      </FormControl>
    </Grid>
  );
};

export default InputCurrency;
