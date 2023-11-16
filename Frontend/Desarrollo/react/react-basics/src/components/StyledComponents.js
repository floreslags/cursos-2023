import React from 'react';
import styled, {css, keyframes,ThemeProvider, createGlobalStyle} from 'styled-components';

export default function StyledComponents(){

    // Definir estilos

    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time)=> `all ${time} ease-in-out`;

    const fadeIn = keyframes`
        0%{
            opacity:0;
        }

        100%{
            opacity:1;
        }
    `;

    const MyH3 = styled.h3`
        text-align:center;
        padding:2rem;
        background-color:${mainColor};
        transition: ${setTransitionTime('1s')};
        color:${({color})=>color || '#000'};
        animation:${fadeIn} 2s ease-out;

        ${({isButton})=>isButton && css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        `};

        &:hover{
            background-color:${mainAlphaColor80};
        }
    `;

    const light = {
        color:'#222',
        bgColor:"#ddd"
    }

    const dark = {
        color:'#ddd',
        bgColor:"#222"
    }

    const Box = styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme})=>theme.color};
        background-color:${({theme})=>theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius:1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2{
            padding:2rem;
            background-color:#fff;
            color:#61dafb;
            text-transform:uppercase;
        }
    `;

    return(
        <>
        <GlobalStyle/>
            <h2>Styled-Componentes</h2>
            <MyH3>Hello I'm an h3 element with Styled component</MyH3>
            <MyH3 color="#61dafb" >Hello I'm an h3 element with Styled component</MyH3>
            <MyH3 isButton>
                h3 button styled-component
            </MyH3>
            <ThemeProvider theme={light}>
                <Box>Light Box</Box>
                <BoxRounded>Light Rounded Box</BoxRounded>
            </ThemeProvider>

            <ThemeProvider theme={dark}>
                <Box>Dark Box</Box>
                <BoxRounded>Dark Rounded Box</BoxRounded>
            </ThemeProvider>
        </>
    );


}