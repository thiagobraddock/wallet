import { InputProps } from '../types';

export default function Input({
  type = 'text', id, value, onChange, testId = '', label = '', placeholder = '',
}: InputProps) {
  return (
    <>
      { label && <label htmlFor={ id }>{ label }</label> }
      <input
        type={ type }
        id={ id }
        value={ value }
        onChange={ onChange }
        data-testid={ testId }
        placeholder={ placeholder }
      />
    </>
  );
}
