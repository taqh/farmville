export const user_actions = {
   LOGIN: 'LOGIN',
   SIGNUP: 'SIGNUP',
   LOGOUT: 'LOGOUT',
   ERROR: 'ERROR',
};

const userReducer = (state, action) => {
   switch (action.type) {
      case user_actions.LOGIN:
         return {
            ...state,
            user: action.payload,
            loginStatus: true,
         };
      case user_actions.SIGNUP:
         return {
            ...state,
            user: action.payload,
            loginStatus: false,
         };
      case user_actions.LOGOUT:
         return {
            ...state,
            user: action.payload,
            loginStatus: false,
         };
      case user_actions.ERROR:
         return {
            ...state,
            user: action.payload,
            loginStatus: false,
         };
      default:
         throw new Error('unknown action' + action.payload);
   }
};

export default userReducer;
