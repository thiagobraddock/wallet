import React from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type InputProps = {
  type?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
  label?: string;
  placeholder?: string;
};

export type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  testId?: string;
  value: string;
  type?: 'button' | 'submit' | 'reset';
};

export type GlobalState = {
  user: {
    email: string;
  };
  wallet: {
    expenses: any;
    currencies: Array<string>;
    idToEdit: number;
    editor: boolean;
  };
};

export type DispatchType = ThunkDispatch<GlobalState, unknown, AnyAction>;

export type SelectProps = {
  options: Array<string>;
  value: string;
  id: string;
  testId?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
