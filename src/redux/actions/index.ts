import { SET_EMAIL } from '../../typos';

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: email,
});
