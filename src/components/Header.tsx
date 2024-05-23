import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const email = useSelector((globalState: GlobalState) => globalState.user.email);
  return (
    <>
      <h2 data-testid="email-field">{ email }</h2>
      <h3 data-testid="header-currency-field">
        BRL
        {' '}
        <span data-testid="total-field">0</span>
      </h3>
    </>
  );
}

export default Header;
