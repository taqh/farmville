import { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userCategory, setUserCategory] = useState(null);

   const handleSignUp = (type) => {
      setUserCategory(type);
   };
   const handleLogin = () => {
      setIsLoggedIn((prevStatus) => !prevStatus);
   };
   const userValue = {
      loginStatus: isLoggedIn,
      updateStatus: handleLogin,
      userCategory: userCategory,
      createAccount: handleSignUp,
   };
   return (
      <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
   );
}

export default UserProvider;
