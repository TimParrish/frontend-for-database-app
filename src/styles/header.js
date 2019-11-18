import styled from "styled-components";
import { deviceSize } from "utilities";

export const Header = styled.div`
  h1 {
    color: white;
    background-color: black;
    text-align: center;
    font-size: 30px;
    @media ${deviceSize.mobile} {
      font-size: 24px;
    }
  }
`;
