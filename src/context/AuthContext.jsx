import { createContext, useContext, useEffect, useState } from "react";
import { useUsers } from "./UsersContext";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {

    const {users} = useUsers();
    const [user,setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if(storedUser)
        {
            setUser(JSON.parse(storedUser));
        }
        //setLoading(false);
    },[]);

    const Login = (username, password) => {
        console.log(users);
        const foundUser = users.find(
            (u) => u.login.username === username && u.login.password === password 
        );

        if(!foundUser) return false;

        const safeUser = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            picture: foundUser.picture,
            gender: foundUser.gender,
            dob: foundUser.dob,
            location: foundUser.location,
            username: foundUser.login.username,
        };

        setUser(safeUser);
        localStorage.setItem("user",JSON.stringify(safeUser));
        return true;
    };
    const logOut = () =>{
        setUser(null);
        localStorage.removeItem("user");
    };

    return(
        <AuthContext.Provider value={{user, Login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);