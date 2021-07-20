import React from 'react';
import Header from '../ui/Header/Header';
import SideNav from '../ui/SideNav/SideNav';

function MainLayout(props) {
    return (
        <div style={{
            background: 'rgb(71,42,232)',
            background: 'linear-gradient(14deg, rgba(71,42,232,1) 2%, rgba(95,37,204,1) 36%, rgba(14,3,29,1) 77%)',
            minHeight: '100vh'
        }}>
            <Header />
            <SideNav />
            <section className="content-container">
                {props.children}
            </section>
        </div>
    )
}

export default MainLayout

