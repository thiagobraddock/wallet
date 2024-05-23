import { ButtonProps } from '../types';

export default function Button({
  value, onClick, disabled = false, testId = '', type = 'button' }: ButtonProps) {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      data-testid={ testId }
      type={ type }
    >
      { value }
    </button>
  );
}
