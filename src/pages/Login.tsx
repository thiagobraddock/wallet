import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { DispatchType } from '../types';
import { setEmail } from '../redux/actions';

function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const shouldDisableButton = () => {
    const { email, password } = state;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const minimunLength = 5;
    return !emailRegex.test(email) || password.length <= minimunLength;
  };

  const handleSubmit = () => {
    dispatch(setEmail(state.email));
    navigate('/carteira');
  };

  return (
    <form>
      <Input
        type="email"
        id="email"
        value={ state.email }
        onChange={ handleChange }
        testId="email-input"
        label="Email"
      />
      <Input
        type="password"
        id="password"
        value={ state.password }
        onChange={ handleChange }
        testId="password-input"
        label="Senha"
      />
      <Button
        disabled={ shouldDisableButton() }
        value="Entrar"
        onClick={ handleSubmit }
      />
    </form>
  );
}

export default Login;
