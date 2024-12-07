import styled from 'styled-components'
import {colorTheme} from "../styles/components/Theme.styled";

export const SectionBlog = styled.div`
    margin: 20px 20px 22px 20px;
 `

export const Title = styled.h1`
    font-weight: 700;
    //font-size: 1.6rem;
    //font-family: "Inter", sans-serif;
    font-size: 16px;
    color: ${colorTheme.grey.dark};
    text-align: left;
`

export const TextParagraph = styled.p`
    margin-top: 20px;
    font-weight: 500;
    line-height: 167%;
    //font-size: 1.2rem;
    //font-family: "Inter", sans-serif;
    font-size: 12px;
    color: ${colorTheme.grey.light};
    text-align: left;
`