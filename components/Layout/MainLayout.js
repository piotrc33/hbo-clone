import React from 'react';
import Header from '../ui/Header/Header';
import {useStateContext} from "../HBOProvider";

function MainLayout(props) {
    const {setSideNavOpened, setAccountModalOpened} = useStateContext();

    return (
        <div style={{
            background: 'rgb(71,42,232)',
            background: 'linear-gradient(14deg, rgba(71,42,232,1) 2%, rgba(95,37,204,1) 36%, rgba(14,3,29,1) 77%)',
            minHeight: '100vh'
        }}>
            <Header />
            <section className="content-container"
                onClick={() => {
                    setAccountModalOpened(false);
                    setSideNavOpened(false);
                }}>
                {props.children}
            </section>
        </div>
    )
}

export default MainLayout

