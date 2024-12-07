import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        font-family: "Inter", sans-serif;
        font-size: 10px;
    }
    
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`