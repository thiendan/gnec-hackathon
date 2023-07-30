import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [posts, setPosts] = useState();
    const [products, setProducts] = useState();

    return (
        <Context.Provider 
            value={{
                posts,
                setPosts,
                products,
                setProducts,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;