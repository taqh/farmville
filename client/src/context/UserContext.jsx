import { createContext } from 'react';

const UserContext = createContext({
   userData: {},
   loginStatus: false,
   userCategory: null,
   exitAccount: () => {},
   accessAccount: () => {},
   createAccount: () => {},
});

export default UserContext;
