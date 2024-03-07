import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(sessionStorage.getItem("token"));

    const [username, setUsername] = useState(sessionStorage.getItem("username"));

    const setTokenState = (newToken) => {

        setToken(newToken);
    };


    useEffect(() => {

        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("username", username);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("username");
        }

    }, [token]);


    const login = async (username, password) => {

        try {

            const response = await axios.post("http://localhost:8080/login", { username, password });

            if (response.status === 200) {
                setToken(response.data.token);
                setUsername(response.data.username);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const logout = () => {

        setToken(null);
        setUsername(null);
        sessionStorage.removeItem("cart");
    };


    const register = async (username, name, surname, email, password) => {

        try {

            const response = await axios.post("http://localhost:8080/api/user/new", { username, name, surname, email, password });

            if (response.status === 200) {
                
                try{
                await login(username, password);
                }catch (error){
                    console.log("error al iniciar sesión");
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    const contextValue = useMemo(
        () => ({
            token,
            username,
            setTokenState,
            login,
            logout,
            register,
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