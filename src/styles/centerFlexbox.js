import styled from "styled-components";
import { deviceSize } from "utilities";

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${deviceSize.mobile} {
    flex-direction: column;
  }
`;

export const FlexImage = styled.img`
  @media ${deviceSize.mobile} {
    display: none;
  }
  height: 200px;
  width: 200px;
  @media ${deviceSize.tablet} {
    height: 150px;
    width: 150px;
  }
  flex: 1;
`;

export const BodyDiv = styled.div`
  p {
    text-align: center;
  }
  flex: 4;
`;
