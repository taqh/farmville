import { useEffect, useReducer, useState } from 'react';
import userReducer from './UserReducer';
import UserContext from './UserContext';
import { user_actions } from './UserReducer';

function UserProvider({ children }) {
   const initialUserState = {
      user: {},
      loginStatus: false,
   };
   const [signupSuccess, setSignupSuccess] = useState(false);
   const [signupError, setSignupError] = useState(false);
   const [userState, dispatch] = useReducer(userReducer, initialUserState);

   const signup = (data) => {
      dispatch({ type: user_actions.SIGNUP, payload: data });
      data === 'error' ? setSignupError(true) : setSignupSuccess(true);
      console.log(data);
   };

   const login = (data) => {
      dispatch({ type: user_actions.LOGIN, payload: data });
      console.log(data);
   };

   const Logout = (data) => {
      dispatch({ type: user_actions.LOGOUT, payload: data });
      console.log(data);
   };
   
   useEffect(() => {
      if (signupSuccess) {
         const timer = setTimeout(() => {
            setSignupSuccess(false);
         } , 3000);
         return () => clearTimeout(timer);
      } else if (signupError) {
         const timer = setTimeout(() => {
            setSignupError(false);
         } , 3000);
         return () => clearTimeout(timer);
      }
   }, [signupSuccess, signupError]);

   console.log(userState.loginStatus)

   const userValue = {
      loginStatus: userState.loginStatus,
      userData: userState,
      exitAccount: Logout,
      accessAccount: login,
      createAccount: signup,
      signupSuccess,
      signupError,
   };

   return (
      <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
   );
}

export default UserProvider;
