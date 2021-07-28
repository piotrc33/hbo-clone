import React, {useContext, useState} from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext);
}

export default function HBOProvider({children}){
    const defaultUserImg = 'https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb';
    const api_key = "bea23fa52dfceb92799aa605744eeb8e";

    const [user, setUser] = useState('');
    const [sideNavOpened, setSideNavOpened] = useState(false);
    const [accountModalOpened, setAccountModalOpened] = useState(false);
    const [searchOpened, setSearchOpened] = useState(false);
    const [watchList, setWatchList] = useState(ls.get("myList"));

    const addToList = (media) => {
        let myList;
        if(ls('myList') !== null){
            myList = ls('myList');
            myList.push(media);
            ls.set('myList', myList);
            console.log(myList);
            setWatchList(myList);
        } else {
            ls.set('myList', [media]);
            setWatchList(ls.get("myList"));
        }
    }

    const removeFromList = (mediaId) => {
        let myList = ls('myList');
        myList = myList.filter((item) => item.mediaId !== mediaId);
        ls.set('myList', myList);
        setWatchList(myList);
    }

    const thumbnailSizes = ['large-v', 'small-v', 'large-h', 'small-h']


    const createUserAction = (e) => {
        setUser(e.target.value);
    }

    const closeModals = () => {
        setSideNavOpened(false);
        setAccountModalOpened(false);
        setSearchOpened(false);
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
            api_key,
            thumbnailSizes,
            closeModals,
            watchList,
            removeFromList,
            addToList,
        }} >
            {children}
        </StateContext.Provider>
    );
}