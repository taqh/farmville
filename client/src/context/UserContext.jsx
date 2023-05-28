import { createContext } from "react";

const UserContext = createContext({
   loginStatus: false,
   userCategory: null,
   updateStatus: () => {},
   createAccount: () => {},
})

export default UserContext