import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const setTokenState = (newToken) => {

        setToken(newToken);
    };


    useEffect(() => {

        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }

    }, [token]);


    const login = async(username, password) => {

        try {
            
            const response = await axios.post("http://localhost:8080/login", {username, password});

            if (response.status === 200) {
                setToken(response.data.token);
            }
        }catch (error) {
            
        }
    };

    const logout = () => {

        setToken(null);
    };

    const contextValue = useMemo(
        () => ({
            token,
            setTokenState,
        }),
        [token]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;