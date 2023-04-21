import { RatesData } from '../types/types';

const createDataForTable = (code: string, rate: number): RatesData => {
  return { code, rate };
};

export default createDataForTable;
