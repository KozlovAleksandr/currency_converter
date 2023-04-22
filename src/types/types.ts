export type PageNavigation = {
  title: string;
  link: string;
};

export type SelectCurrencyProps = {
  value: string;
  setValue: any;
  label: string;
};

export type InputCurrencyProps = {
  quantum: number;
  label: string;
  setAmoutValue?: any;
  isReadOnly?: boolean;
};

export type RatesColumn = {
  id: 'code' | 'rate';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
  width?: string;
};

export type RatesData = {
  code: string;
  rate: number;
};

export type RatesResponce = {
  [key: string]: number;
};
