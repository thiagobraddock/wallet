import { SelectProps } from '../types';

export default function Select({
  options, value, onChange, id, testId = '', label = '' }: SelectProps) {
  return (
    <>
      { label && <label htmlFor={ id }>{ label }</label> }
      <select
        id={ id }
        value={ value }
        onChange={ onChange }
        data-testid={ testId }
      >
        {
          options.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))
        }
      </select>
    </>
  );
}
