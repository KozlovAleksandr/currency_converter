import getCurrencyCode from '../utils/getCurrencyCode';

const BASE_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = '273fa9914a77b57f349cb0eb';
//const API_KEY = '01dfa2ba6d7d80762a98019c';
//const API_KEY = 'ac8c421bc47d2b2cc5fe3ef6';

export const currencyAPI = {
  getCurrencyCodes: async () => {
    try {
      const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
      const data = await response.json();
      if (data.result === 'success') {
        return data.supported_codes;
      }
    } catch (error: any) {
      console.log(error);
    }
  },

  getPairConversion: async (baseCurrency: string, targetCurrency: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${API_KEY}/pair/${getCurrencyCode(
          baseCurrency
        )}/${getCurrencyCode(targetCurrency)}`
      );
      const data = await response.json();
      if (data.result === 'success') {
        return data.conversion_rate;
      }
    } catch (error: any) {
      console.log(error);
    }
  },

  getRates: async (baseCurrency: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${API_KEY}/latest/${getCurrencyCode(baseCurrency)}`
      );
      const data = await response.json();
      if (data.result === 'success') {
        return data.conversion_rates;
      }
    } catch (error: any) {
      console.log(error);
    }
  },
};
