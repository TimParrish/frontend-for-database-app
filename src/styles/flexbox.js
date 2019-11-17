import styled from "styled-components";

export const FlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* flex-wrap: wrap; */}
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FlexImage = styled.img`
  @media (max-width: 800px) {
    display: none;
  }
  object-fit: contain;
  max-width: 100%;
  display: flex;
  flex: 0 1 200px;
`;
