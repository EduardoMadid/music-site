import styled from 'styled-components';
import Colors from '../constants/Colors';

export const NavStyle = styled.header`
    .nav {
        grid-area: nav;
        background-color: ${Colors.black}; 
    }

    .nav .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .nav .container{
        color: white;
    }

    .nav .logo {
        width: 150px;  
        height: auto;  
        max-width: 100%;  
    }

    .nav ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;

    }
    .nav ul .link:hover {
    border-bottom: 2px solid ${Colors.blue};
    }

    .nav ul .link {
        font-size: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${Colors.white}; 
        font-weight: 400;
    }

    .botaoTema button {
        background-color: ${Colors.gray}; 
        color: ${Colors.black}; 
        padding: 8px 16px;
        font-size: 1rem;
        font-weight: 900;
        text-transform: uppercase;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .botaoTema button:hover {
        background-color: ${Colors.green}; 
    }

    .nome{
        letter-spacing:2px;
    }

    .hamburger {
        display: none;
        font-size: 2rem;
        cursor: pointer;
        color: ${Colors.white}; 
    }

    @media (max-width: 830px) {
        .nav ul {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            background-color: ${Colors.gray}; 
            flex-direction: column;
            gap: 1rem;
            padding: 20px;
            width: 200px;
            z-index: 1000;
        }

        .nav ul.active {
            display: flex;
        }

        .hamburger {
            display: block;
        }
    }
`;
