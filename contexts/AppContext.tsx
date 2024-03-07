import React, { createContext, useContext } from "react";

const AppContext = createContext<any>(null)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AppContext.Provider value={{}}>

        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }