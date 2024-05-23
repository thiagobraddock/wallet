import { DispatchType } from '../../types';
import { SET_CURRENCIES, SET_EMAIL } from '../../typos';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});

const setCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const fetchCurrencies = () => async (dispatch: DispatchType) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const currenciesArray = Object.keys(data);
      const filteredCurrenciesArray = currenciesArray.filter((curr) => curr !== 'USDT');
      dispatch(setCurrencies(filteredCurrenciesArray));
    })
    .catch((error) => console.error(error));
};
