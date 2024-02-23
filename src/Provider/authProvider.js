const { default: axios } = require("axios");
const { useMemo, useContext } = require("react");
const { useEffect } = require("react");
const { useState } = require("react");
const { createContext } = require("react");


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const setTokenState = (newToken) => {

        setToken(newToken);
    }
};

useEffect( () => {

    if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        localStorage.setItem("token", token);
    }else{
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
    }

}, [token]);

const contextValue = useMemo( 
    () => ({
        token,
        setToken,
    }),
    [token]
    );

return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
);

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;