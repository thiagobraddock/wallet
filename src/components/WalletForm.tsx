import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, GlobalState } from '../types';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies } from '../redux/actions';
import { paymentMethods, tagCategories, walletFormInitialState } from '../typos';

function WalletForm() {
  const [state, setState] = useState(walletFormInitialState);
  const dispatch: DispatchType = useDispatch();
  const { currencies } = useSelector(({ wallet }: GlobalState) => wallet);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <form>
      <Input
        type="number"
        id="value"
        value={ state.value }
        onChange={ handleChange }
        testId="value-input"
        label="Valor"
      />
      <Input
        type="text"
        id="description"
        value={ state.description }
        onChange={ handleChange }
        testId="description-input"
        label="Descrição"
      />
      <Select
        id="currency"
        value={ state.currency }
        onChange={ handleChange }
        testId="currency-input"
        label="Moeda"
        options={ currencies }
      />
      <Select
        id="method"
        value={ state.method }
        onChange={ handleChange }
        testId="method-input"
        label="Método de Pagamento"
        options={ paymentMethods }
      />
      <Select
        id="category"
        value={ state.category }
        onChange={ handleChange }
        testId="tag-input"
        label="Categoria"
        options={ tagCategories }
      />
    </form>
  );
}

export default WalletForm;
