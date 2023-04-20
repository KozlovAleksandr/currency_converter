import getCurrencyCode from '../utils/getCurrencyCode';

const BASE_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = '273fa9914a77b57f349cb0eb';

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
};
