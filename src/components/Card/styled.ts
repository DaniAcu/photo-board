import styled from 'styled-components';
import { IProps } from './typings';

export const Frame = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    padding: 1.5em 1.5em 4.5em 1.5em;
    position: absolute;
`;

export const Photo = styled.div`
    background-image: url("${ ({ image }: IProps) => image }");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20em;
    width: 20em;
`;
