import "./Projects.css";
import { useState } from "react"
import  styled from "styled-components"
import { portfolioData } from "../../data";
import { ProjDisNav } from "../compIndex";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 40px 0px 40px 0px;

  @media ( max-width: 800px) {
    height: 80vh;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-image: linear-gradient(to right, #1F1BA6, #6619A5);
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  width: 700px;
  max-width: 950px;
  overflow: hidden;
  margin: 50px;
  background-image: linear-gradient(to bottom left, #8e4d9c, #35073fc2);
  border-radius: 10px;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    height: 400px;
  }
`;



const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : portfolioData.length);
    } else {
      setSlideIndex(slideIndex < portfolioData.length ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <ArrowBackIosNewIcon />
    </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {portfolioData.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
             <ProjDisNav item={item}/>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowForwardIosIcon />
    </Arrow>
  </Container>
  );
};

export default Projects;
