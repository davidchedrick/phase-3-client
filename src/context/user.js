import { createContext, useState } from "react";

const UserContext = createContext();
const LogInContext = createContext();

function UserProvider({ children }) {
    
    const [user, setUser] = useState(null);
    const currentUser = [user, setUser]

    const [logIn, setLogIn] = useState(false);
    const login = [logIn, setLogIn]

    return (
        <UserContext.Provider value={currentUser}>
            <LogInContext.Provider value={login}>
                {children}
            </LogInContext.Provider>
        </UserContext.Provider>
    )

}

export {UserContext, LogInContext, UserProvider};