import styled from 'styled-components'
import {colorTheme} from "../styles/components/Theme.styled";

export const BlogSection = styled.section`
    padding: 20px 20px 22px 20px;
 `

export const Title = styled.h1`
    font-weight: 700;
    font-size: 1.6rem;
    color: ${colorTheme.grey.dark};
    text-align: left;
`

export const Text = styled.p`
    margin-top: 20px;
    font-weight: 500;
    line-height: 167%;
    font-size: 1.2rem;
    color: ${colorTheme.grey.light};
    text-align: left;
`