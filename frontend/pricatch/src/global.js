import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,body {
    margin: 0;
    padding:0
}

*, *::after, *::before {
    box-sizing: border-box
}

h1 {
    font-size: 2rem;
    text-align: center;
}

img {
height: auto;
width: 10rem;
}

div {
text-align: center;
}

small {
display: block;
}

p{
    font-family: roboto;
}

a {
text-decoration: none;
}
`;
