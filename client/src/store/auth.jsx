import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (authToken) => {
    setToken(authToken);
    return localStorage.setItem("token", authToken);
  };

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;
  console.log("loguttokemn>>>>", isLoggedIn);

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.log();
    }
  };

  const fetchServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const services_data = await response.json();
        return setService(services_data);
      }
      console.log(data);
    } catch (error) {
      console.log(`service err>> ${error}`);
    }
  };

  // JWT authentication and get logged in user data
  useEffect(() => {
    userAuthentication();
    fetchServiceData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        service,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outsied of provider");
  }

  return authContextValue;
};
