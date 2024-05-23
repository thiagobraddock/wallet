export const USER_INITIAL_STATE = {
  email: '',
};

export const WALLET_INITIAL_STATE = {
  expenses: [],
  currencies: [],
  idToEdit: 0,
  editor: false,
};

export const walletFormInitialState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  category: 'Lazer',
};

export const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
export const tagCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export const SET_EMAIL = 'setEmail';
export const SET_CURRENCIES = 'setCurrencies';
