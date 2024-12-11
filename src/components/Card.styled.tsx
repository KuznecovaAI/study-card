import rctangleImg from "../Rectangle.png";
import cardImg from "../Rectangle.png"
import {BlogSection, Text, Title} from "./SectionBlog.styled";
import {StyledButton} from "./Button.styled";
import styled from "styled-components";
import {colorTheme} from "../styles/components/Theme.styled";
import {CardImg} from "./CardImg.styled";


type CardStyledPropsType = {
    srcImg: string;
    title: string;
    text: string;
}

const CardStyled = (props: CardStyledPropsType) => {
    return (
        <Card>
            <CardImg src={props.srcImg} alt="Image"/>
            <BlogSection>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                 <StyledButton btnType={"primary"}>See more</StyledButton>
                <StyledButton btnType={"outlined"}>Save</StyledButton>
            </BlogSection>
        </Card>

    );
};

export default CardStyled;

const Card = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 350px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: ${colorTheme.color.primary};
`