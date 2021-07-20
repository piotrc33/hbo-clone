import React, {useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext);
}

export default function HBOProvider({children}){
    const [user, setUser] = useState('');
    const defaultUserImg = 'https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb';
    const createUserAction = (e) => {
        setUser(e.target.value);
    }
    return (
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg
        }} >
            {children}
        </StateContext.Provider>
    );
}