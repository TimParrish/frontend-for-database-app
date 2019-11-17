import styled from "styled-components";

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* flex-wrap: wrap; */}
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const FlexImage = styled.img`
  @media (max-width: 650px) {
    display: none;
  }
  height: 200px;
  width: 200px;
  @media (max-width: 800px) {
    height: 150px;
    width: 150px;
  }
  flex: 1;
`;

export const BodyDiv = styled.div`
  p {
    text-align: center;
  }
  background-color: lightblue;
  flex: 4;
`;
