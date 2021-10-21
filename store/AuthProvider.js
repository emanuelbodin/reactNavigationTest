import React, {
    useState,
    useEffect,
    useCallback,
    useContext,
    createContext
  } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
  
  
    const login = () => {
        console.log('on login')
        setIsAuth(true);
    };

    const logout = () => {
        setIsAuth(false);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isAuth,
          login,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  const useAuthContext = () => {
    const { isAuth, login,logout} = useContext(AuthContext);
    return {isAuth, login,logout};
  };
  
  export { useAuthContext, AuthProvider };
