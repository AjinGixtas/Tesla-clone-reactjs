import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

interface Props {
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;
  backgroundImage: string;
}
function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
}: Props) {
  return (
    <Wrap backgroundImage={backgroundImage}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="images\down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div<{ backgroundImage: string }>`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between; //Vertical line
  align-items: center; //Horizontal
  cursor: pointer;
  background-image: ${(props) => `url("/images/${props.backgroundImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index:-1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
