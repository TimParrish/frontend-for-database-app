import styled from "styled-components";
import { deviceSize } from "utilities";

export const BodyDiv = styled.div`
  p {
    text-align: center;
  }
  background-color: lightblue;
  flex: 4;
`;

export const MarqueeImage = styled.img`
  max-width: 1250px;
  @media ${deviceSize.tablet} {
    width: 800px;
  }
  @media ${deviceSize.mobile} {
    width: 650px;
  }
`;
