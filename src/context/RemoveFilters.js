import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useRemoveFilters = () => useContext(AppContext);

const RemoveFiltersProvider = ({ children }) => {
    const [remove, setRemove] = useState(false);
    return (
        <AppContext.Provider value={[remove, setRemove]}>
            {children}
        </AppContext.Provider>
    )

}

export default RemoveFiltersProvider;