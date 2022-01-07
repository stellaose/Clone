/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Fade from 'react-reveal/Fade';

import { 
        Wrap, 
        ItemText, 
        ButtonGroup, 
        LeftButton, 
        RightButton,
        DownArrow,
        Buttons 
    } from '../Stylesheets/section.styled';

const Section = ({title, description, link, leftBtnText, rightBtnText, backgroundImg}) => {
    return (
        <Wrap bgImg = {backgroundImg}>
            <Fade bottom>  
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description} <a href="#">{link}</a></p>
                </ItemText>
            </Fade>
          

            <Buttons>
                <Fade bottom>  
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        { rightBtnText && <RightButton>
                                        {rightBtnText}
                                        </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src = "/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;
