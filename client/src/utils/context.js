import { createContext, useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import { fetchDataFromApi } from "./api";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [visited, setVisited] = useState(false);
    const [posts, setPosts] = useState();
    const [categories, setCategories] = useState();

    return (
        <Context.Provider 
            value={{
                visited,
                setVisited,
                posts,
                setPosts,
                categories,
                setCategories,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;