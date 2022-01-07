import styled from "styled-components";

export const Wrap = styled.div`
    width: 100wh;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`};
`

export const ItemText = styled.div`
    padding: 15vh 0 0;
    text-align: center;
    
    h1{
        font-size: 2.5rem;
        font-weight: 550;
        margin-top: 0.6rem
    }
    p{
        font-size: 0.9rem;
        margin-top: 0.3rem;
    }
    a {
        text-decoration: underline;
    }
`

export const ButtonGroup = styled.div`
    display: flex; 
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 2.5rem;
    width: 16rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: 500;
`

export const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

export const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

export const Buttons = styled.div`
`