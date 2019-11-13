import styled from "styled-components";

export const MainContent = styled.div`
  width: 100vw;
  backround-color: lightgreen;
`;

export const LeftImageDiv = styled.div`
  img {
    height: 20vw;
    width: 20vw;
  }
  backround-color: purple;
  float: left;
`;

export const RightImageDiv = styled.div`
  img {
    height: 20vw;
    width: 20vw;
  }
  background-color: lightblue;
  float: right;
`;

export const BodyDiv = styled.div`
  p {
    text-align: center;
  }
  background-color: lightblue;
  float: left;
  width: 60vw;
  height: 20vw;
`;

export const MarqueeImage = styled.img`
  height: 200px;
  width: 100vw;
`;
