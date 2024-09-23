import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:bordex-box;
    list-style:none;
    text-decoration:none;
}
:root{
    --green: #3C6E71;
    --black: #353535;
    --white: #FFFFFF;
    --gray:  #D9D9D9;
    --blue:  #284B63;
} 
`
export default GlobalStyle