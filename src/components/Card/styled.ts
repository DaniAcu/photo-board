import styled from 'styled-components';
import { IStyledProp } from './typings';

export const Frame = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    padding: 1.5em 1.5em 4.5em 1.5em;
    position: absolute;
    ${ ({ dragging }: IStyledProp) => !dragging ? 'transition: transform .3s ease;' : '' }
`;

export const Photo = styled.div`
    background-image: url("${ ({ photo }: IStyledProp) => photo }");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20em;
    width: 20em;
`;
