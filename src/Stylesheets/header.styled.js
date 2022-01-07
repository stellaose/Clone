import styled, {keyframes} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';


export const Container = styled.div`
    position: fixed;
    display: flex;
    min-height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        width: 8rem;
        height: 1rem;
        margin-left: 2.2rem;
    }
`
const Links = keyframes` 
    from {
        background-color: none;
        }
    to {  
        background-color:  rgba(101, 110, 117, .2);
        }
    0%   {
        background-color: none; right:0px; top:0px;
        }
    50%  {
        background-color:  rgba(101, 110, 117, .2); right: 3.5rem; top:0px;
        }
    100%  {
        background-color:  rgba(101, 110, 117, .2); right: 8rem; top:0px;
        }
  `

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

        a {
            font-weight: 600;
            padding: 0 1rem;
            flex-wrap: nowrap;
            font-size: 0.9rem;
        }
        a:hover {
            border-radius: 10px;
            padding: 0.5rem 1rem ;
            animation: ${Links} 1 4s;
            
        }

        @media(max-width: 768px){
            display: none;
        }
`

export const RightMenu = styled.div`
    display: flex;
    align-items: center;

        p {
        font-weight: 600;
        padding: 0 1rem;
        flex-wrap: nowrap;
        font-size: 0.9rem;
        cursor: pointer;
        }

        p:hover {
            border-radius: 10px;
            padding: 0.5rem 1rem ;
            animation: ${Links} 1 4s;
        }
`
export const CustomMenu = styled.div`
      p {
        font-weight: 600;
        padding: 0 1rem;
        flex-wrap: nowrap;
        font-size: 0.9rem;
        }

        p:hover {
            border-radius: 10px;
            padding: 0.5rem 1rem ;
            animation: ${Links} 1 4s;
        }
`
export const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16; 
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }
`
export const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
export const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`