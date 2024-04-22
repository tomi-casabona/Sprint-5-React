import styled from "styled-components";

export const StyledCircle = styled.div`
  width: ${(props) => (props.positionIndex === props.count ? "40px" : "10px")};
  height: 10px;
  background-color: black;
  border-radius: 50%;
  opacity: ${(props) => (props.positionIndex === props.count ? ".9" : ".2")};
  transition: width 0.5s linear;
`;
