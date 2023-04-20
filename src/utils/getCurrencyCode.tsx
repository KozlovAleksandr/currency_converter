const getCurrencyCode = (currency: string) => {
  if (currency !== null) {
    return currency.split(',')[0];
  }
};

export default getCurrencyCode;
