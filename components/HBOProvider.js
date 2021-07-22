import React, {useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext);
}

export default function HBOProvider({children}){
    const defaultUserImg = 'https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb';

    const [user, setUser] = useState('');
    const [sideNavOpened, setSideNavOpened] = useState(false);
    const [accountModalOpened, setAccountModalOpened] = useState(false);
    const [searchOpened, setSearchOpened] = useState(false);

    const api_key = "bea23fa52dfceb92799aa605744eeb8e";

    const createUserAction = (e) => {
        setUser(e.target.value);
    }
    return (
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg,
            sideNavOpened,
            setSideNavOpened,
            accountModalOpened,
            setAccountModalOpened,
            searchOpened,
            setSearchOpened,
            api_key
        }} >
            {children}
        </StateContext.Provider>
    );
}