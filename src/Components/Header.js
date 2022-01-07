/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { 
    Container,
    Menu, 
    RightMenu, 
    CustomMenu, 
    BurgerNav,
    CustomClose, 
    CloseWrapper
        } from '../Stylesheets/header.styled';
import { selectCars } from '../features/car/carSlice';
import { selectSolar } from '../features/car/solarSlice';
import { useSelector } from 'react-redux';


const Header = () => {
    const [ burgerStatus, setBurgerStatus ] = useState(false);
    const cars = useSelector(selectCars);
    const sun = useSelector(selectSolar);

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                {cars && cars.map((car, index) =>(
                    <p><a key = {index} href="#">{car}</a></p>
                    
                ))}
                <></>
                {sun && sun.map((solar, index) => (
                    <>
                     <p><a key = {index} href="#">{solar}</a></p>
                    </>
                   
                ))}

            </Menu>

            <RightMenu>
                <p><a href="#"> Shop</a></p>
                <p><a href="#"> Account</a></p>
                <CustomMenu onClick = {() => setBurgerStatus(true)}>
                    <p> Menu</p>
                </CustomMenu> 
            </RightMenu>

            <BurgerNav show = { burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick = {() => setBurgerStatus(false)}/>
            </CloseWrapper>
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Used Inventory</a></li>
                <li><a href = "#">Trade-in</a></li>
                <li><a href = "#">Test Drive</a></li>
                <li><a href = "#">Cybertruck</a></li>
                <li><a href = "#">Existing Inventory</a></li>
                <li><a href = "#">Charging</a></li>
                <li><a href = "#">Powerwall</a></li>
                <li><a href = "#">Commercial Energy</a></li>
                <li><a href = "#">Utilities</a></li>
                <li><a href = "#">Find Us</a></li>
                <li><a href = "#">Support</a></li>
                <li><a href = "#">Investor Relations</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header;
