/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav,
        Logo, 
        NavMenu,
        UserImg } from '../Stylesheets/Header.styled'

const Header = () => {
    return (
        <Nav>
            <Logo src = "/images/logo.svg"/>
            <NavMenu>
                <a href="" >
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="" >
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a> 
                <a href="" >
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a href="" >
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINAL</span>
                </a>
                <a href="" >
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="" >
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src = "/images/stella.jpeg"/>
        </Nav>
    )
}

export default Header;
