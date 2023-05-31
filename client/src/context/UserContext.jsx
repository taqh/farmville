import { createContext } from 'react';

export const initialUserState = {
   user: null,
   error: null,
   loginStatus: false,
   userCategory: null,
};

const UserContext = createContext({
   userData: {},
   loginStatus: false,
   userCategory: null,
   exitAccount: () => {},
   accessAccount: () => {},
   createAccount: () => {},
});

export default UserContext;
