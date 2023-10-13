import { createContext } from 'react';

const UserContext = createContext({
   userData: {},
   loginStatus: false,
   userCategory: null,
   signupSuccess: false,
   signupError: false,
   exitAccount: () => {},
   accessAccount: () => {},
   createAccount: () => {},
});

export default UserContext;
