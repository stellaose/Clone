import React from 'react';
import { Container } from '../Stylesheets/home.styled';
import Section from '../Components/Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title = 'Model S'
                description = 'Order Online for '
                link = 'Touchless Delivery'
                backgroundImg = 'model-s.jpg'
                leftBtnText = 'custom order'
                rightBtnText = 'Existing Inventory'
            />
            <Section 
                title = 'Model Y'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-y.jpg'
                leftBtnText = 'custom order'
                rightBtnText = 'Existing Inventory'
            />
            <Section 
                title = 'Model 3'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-3.jpg'
                leftBtnText = 'custom order'
                rightBtnText = 'Existing Inventory'
            />
            <Section 
                title = 'Model X'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-x.jpg'
                leftBtnText = 'custom order'
                rightBtnText = 'Existing Inventory'
            />
              <Section 
                title = 'Solar Panel'
                description = 'Lowest Cost Solar Panels in America'
                backgroundImg = 'solar-panel.jpg'
                leftBtnText = 'order now'
                rightBtnText = 'learn more'
            />
              <Section 
                title = 'Solar Roof'
                description = 'Produce Clean Energy From Your Roof'
                backgroundImg = 'solar-roof.jpg'
                leftBtnText = 'order now'
                rightBtnText = 'learn more'
            />
             <Section 
                title = 'Accessories'
                description = ''
                backgroundImg = 'accessories.jpg'
                leftBtnText = 'shop now'
            />
        </Container>
    )
}

export default Home
