import styled from "styled-components";
import { deviceSize } from "utilities";
import { Button } from "reactstrap";

export const SubmitButton = styled(Button)`
  margin: 15px;
`;

export const SelectButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectionBox = styled.div`
  h2 {
    text-align: center;
    color: black;
  }
  width: 50%;
`;

export const TableDataDiv = styled.div`
  justify-content: center;
  align-items: center;
  margin: 15px;
  ${'' /* center the results from the JsonToTable */}
  td:first-child{
    color: black;
    text-align: center;
    }
`;

export const QuerySelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
`;

export const SelectionBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media ${deviceSize.tablet} {
    flex-direction: column;
  }
`;

export const DropdownBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
