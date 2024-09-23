import styled from 'styled-components';
import Colors from '../constants/Colors';

export const NavStyle = styled.header`
    .nav {
        grid-area: nav;
        background-color: ${Colors.blue};
    }

    .nav .container {
        display: flex;
        padding: 30px 40px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .nav .logo {
        font-size: 2rem;
        font-weight: 800;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.color};
    }

    .nav ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
    }

    .nav ul .link {
        font-size: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.color};
        font-weight: 400;
    }

    .botaoTema button {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        padding: 8px 16px;
        font-size: 1rem;
        font-weight: 900;
        text-transform: uppercase;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .botaoTema button:hover {
        background-color: ${props => props.theme.background};
    }

    .hamburger {
        display: none;
        font-size: 2rem;
        cursor: pointer;
        color: ${props => props.theme.color}; 
    }

    @media (max-width: 830px) {
        .nav ul {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            background-color: ${props => props.theme.background};
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