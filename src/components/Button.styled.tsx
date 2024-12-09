import styled, {css} from "styled-components";
import {colorTheme} from "../styles/components/Theme.styled";

type StyledButtonPropsType = {
    btnType?: "primary" | "outlined"
}

export const StyledButton = styled.button<StyledButtonPropsType>`
    float: left;
    margin-top: 19px;
    margin-right: 12px;
    border: none;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-weight: 700;
    line-height: 200%;
    font-size: 1rem;
    
    

    ${props => props.btnType === "primary" && css<StyledButtonPropsType>`
        background-color: ${colorTheme.color.button};
        color: ${colorTheme.color.primary};
    `}

    ${props => props.btnType === "outlined" && css<StyledButtonPropsType>`
        border: 2px solid ${colorTheme.color.button};
        background-color: ${colorTheme.color.primary};
        color: ${colorTheme.color.button};
    `}
`
