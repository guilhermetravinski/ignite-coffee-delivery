import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.white}
    }

    body { 
        background-color: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4 {
        font-family: ${(props) => props.theme.fonts.title}, cursive;
    }


`
