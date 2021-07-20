import React from 'react'
import Account from '../Account/Account'
import SearchModal from '../SearchModal/SearchModal'

function Header() {
    return (
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="fas fa-bars" />
                </div>
                <div className="top-header__search-btn">
                    <i className="fas fa-search" />
                </div>
            </div>

            <div className="top-header__logo"></div>

            <div className="top-header__account">
                <div className="top-header__user-img-border">
                    <img src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt="user_image" 
                    className="top-header__user-img" />
                </div>
                
                <div className="top-header__user-name">Sara</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header
