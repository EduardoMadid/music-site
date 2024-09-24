import styled from 'styled-components';
import Colors from '../constants/Colors';

export const LoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83.8vh;
    background-color: ${Colors.gray};

    .login-container {
        background-color: ${Colors.white};
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 400px;
        max-width: 100%;

        h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: ${Colors.black};
        }

        .input-group {
            margin-bottom: 20px;
            text-align: left;

            label {
                display: block;
                font-size: 1rem;
                margin-bottom: 8px;
                color: ${Colors.black};
            }

            input {
                width: 100%;
                padding: 10px;
                font-size: 1rem;
                border: 1px solid ${Colors.gray};
                border-radius: 5px;
                outline: none;

                &:focus {
                    border-color: ${Colors.blue};
                    caret-color:${Colors.green}
                }
            }
        }

        button {
            width: 100%;
            padding: 12px;
            font-size: 1rem;
            background-color: ${Colors.black};
            color: ${Colors.white};
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            text-transform: uppercase;

            &:hover {
                background-color: ${Colors.green};
            }
        }

        p {
            margin-top: 20px;
            color: ${Colors.black};

            a {
                color: ${Colors.black};
                text-decoration: none;
                font-weight: bold;

                &:hover {
                    color: ${Colors.green};
                }
            }
        }
    }
`;
