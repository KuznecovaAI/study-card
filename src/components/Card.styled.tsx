import rctangleImg from "../Rectangle.png";
import {SectionBlog, TextParagraph, Title} from "./SectionBlog.styled";
import {StyledButton} from "./Button.styled";
import styled from "styled-components";
import {colorTheme} from "../styles/components/Theme.styled";
import {SectionImg} from "./SectionImg.styled";

const CardStyled = () => {
    return (
        <MainWrapper>
            <Box>
                <Container>
                    <SectionImg>
                        <img src={rctangleImg} alt="Image"/>
                    </SectionImg>
                    <SectionBlog>
                        <Title>Headline</Title>
                        <TextParagraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                            venen.</TextParagraph>
                        <StyledButton btnType={"primary"}>See more</StyledButton>
                        <StyledButton btnType={"outlined"}>Save</StyledButton>
                    </SectionBlog>
                </Container>
            </Box>
        </MainWrapper>

    );
};

export default CardStyled;

const Box = styled.div`
    height: 350px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: ${colorTheme.color.primary};
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`