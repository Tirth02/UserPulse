import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UsersContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
        .then((res) => res.json())
        .then((data) => {
            const userWithId = data.results.map((u,i) => ({
                ...u,
                id: i + 1,
            }))
            setUsers(userWithId)
        })
        .finally(() => setLoading(false));
    },[])

    return (
        <UserContext.Provider value={{users, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = () => useContext(UserContext);