import styled from 'styled-components';
import HomeImage from '../assets/HomeImage.jpg';

const Container = styled.div`
    background-image: url(${HomeImage}); /* Define a imagem como background */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ajusta a altura para ocupar a tela toda */
    color: #fff;
    position: relative;
    text-align: center;

    h1 {
        font-size: 3rem;
        font-weight: bold;
        z-index: 1; /* Garante que o texto esteja acima da imagem */
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Adiciona uma camada escura sobre a imagem */
        z-index: 0; /* Garante que a camada fique entre o texto e a imagem */
    }

    .animate{
        animation: animate 2s ease-in-out;
    }

    @keyframes animate{
    0% {
        transform: translateX(-500px); /* Surge debaixo */
        opacity: 0; /* Invisível no início */
    }
    100% {
        transform: translateX(0); /* Volta à posição original */
        opacity: 1; /* Totalmente visível */
    }
}
`;

export default Container;
