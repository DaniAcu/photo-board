import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #eee;
        margin: 0;
        overflow: hidden;
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`;