import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
}

*,*::after,*::before{
    box-sizing: inherit;
} 

body{
    margin: 0;
    font-family: 'Spartan', sans-serif;
}

a, button, input{
    font-family: 'Spartan', sans-serif;
}
`;
