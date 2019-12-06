import React, { useEffect, useState } from "react";
import axios from "axios";
import { BodyDiv } from "styles";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import {
  Button,
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
import styled from "styled-components";
import { StatesList, CrimeNamesList } from "utilities";

var apiResponse = [];
var dataQuery1 = "";
var dataQuery2 = "";
var state1 = "";
var state2 = "";
var year1;
var year2;
var crime1 = "";
var crime2 = "";
var crime1Table = "";
var crime2Table = "";

const SubmitButton = styled(Button)`
  margin: 15px;
`;
const SelectButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectionBox = styled.div`
  h2 {
    text-align: center;
    color: black;
  }
  width: 50%;
`;

const TableDataWrapper = styled.div`
  display: flex;
`;

const TableDataDiv = styled.div`
  width: 50%;
`;

const SelectionBoxWrapper = styled.div`
  display: flex;
`;

const DropdownBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export function Sql() {
  const [dropdownAOpen1, setAOpen1] = useState(false);
  const [dropdownAOpen2, setAOpen2] = useState(false);
  const [dropdownAOpen3, setAOpen3] = useState(false);
  const [dropdownBOpen1, setBOpen1] = useState(false);
  const [dropdownBOpen2, setBOpen2] = useState(false);
  const [dropdownBOpen3, setBOpen3] = useState(false);
  const toggleA1 = () => setAOpen1(!dropdownAOpen1);
  const toggleA2 = () => setAOpen2(!dropdownAOpen2);
  const toggleA3 = () => setAOpen3(!dropdownAOpen3);
  const toggleB1 = () => setBOpen1(!dropdownBOpen1);
  const toggleB2 = () => setBOpen2(!dropdownBOpen2);
  const toggleB3 = () => setBOpen3(!dropdownBOpen3);

  //TODO: remove next line after initial testing complete
  const [, updateRender] = useState();

  async function accessData() {
    await axios
      .get(
        `http://153.90.127.185:8080/violent/Murder_manslaughter/Montana/2016`
      )
      .then(result => {
        //apiResponse = JSON.parse(result.data);
        apiResponse = result.data;
        console.log(apiResponse);
        //TODO: implement logic for multiple rows returned
        // result.data.forEach(row => {
        //   responseRow = {
        //     name: `${row.name}`,
        //     height: `${row.height}`,
        //     age: `${row.age}`
        //   };
        //   serverJSONResponse.push(responseRow);
        // });
      });

    //TODO: remove next line after initial testing complete
    updateRender(n => !n);
  }

  function submitData() {
    // state/Montana/Murder_manslaughter/2016
    dataQuery1 = `state/${state1}/${crime1}/${year1}`;
    dataQuery2 = `state/${state2}/${crime2}/${year2}`;

    console.log("dataQuery1 is: " + dataQuery1);
    console.log("dataQuery2 is: " + dataQuery2);
  }
  //call the server for an initial test
  useEffect(() => {
    accessData();
  }, []);

  // //re-render when API responds
  // useEffect(() => {}, [apiResponse]);

  return (
    <>
      <BodyDiv>
        <SelectionBoxWrapper>
          <SelectionBox>
            <h2>Data Set 1</h2>
            <DropdownBoxWrapper>
              <ButtonDropdown isOpen={dropdownAOpen1} toggle={toggleA1}>
                <DropdownToggle caret>Select State</DropdownToggle>
                <DropdownMenu>
                  {StatesList.map((state, index) => {
                    return (
                      <DropdownItem
                        onClick={() => {
                          state1 = `${state}`;
                          console.log("state1 is: " + state1);
                        }}
                        key={`state1${state}${index}`}
                      >
                        {state}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonDropdown isOpen={dropdownAOpen2} toggle={toggleA2}>
                <DropdownToggle caret>Select Crime</DropdownToggle>
                <DropdownMenu>
                  {CrimeNamesList.map((crime, index) => {
                    return (
                      <DropdownItem
                        onClick={() => {
                          crime1 = `${crime.data_name}`;
                          crime1Table = `${crime.table}`;
                          console.log(
                            "crime1 is: " +
                              crime1 +
                              " from the " +
                              crime1Table +
                              " table."
                          );
                        }}
                        key={`crime1${crime.data_name}${index}`}
                      >
                        {crime.name}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonDropdown isOpen={dropdownAOpen3} toggle={toggleA3}>
                <DropdownToggle caret>Data Year</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      year1 = 2016;
                      console.log("year1 is: " + year1);
                    }}
                  >
                    2016
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      year1 = 2015;
                      console.log("year1 is: " + year1);
                    }}
                  >
                    2015
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </DropdownBoxWrapper>
          </SelectionBox>
          <SelectionBox>
            <h2>Data Set 2</h2>
            <DropdownBoxWrapper>
              <ButtonDropdown isOpen={dropdownBOpen1} toggle={toggleB1}>
                <DropdownToggle caret>Select State</DropdownToggle>
                <DropdownMenu>
                  {StatesList.map((state, index) => {
                    return (
                      <DropdownItem
                        onClick={() => {
                          state2 = `${state}`;
                          console.log("state2 is: " + state2);
                        }}
                        key={`state2${state}${index}`}
                      >
                        {state}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonDropdown isOpen={dropdownBOpen2} toggle={toggleB2}>
                <DropdownToggle caret>Select Crime</DropdownToggle>
                <DropdownMenu>
                  {CrimeNamesList.map((crime, index) => {
                    return (
                      <DropdownItem
                        onClick={() => {
                          crime2 = `${crime.data_name}`;
                          crime2Table = `${crime.table}`;
                          console.log(
                            "crime2 is: " +
                              crime2 +
                              " from the " +
                              crime2Table +
                              " table."
                          );
                        }}
                        key={`crime1${crime.data_name}${index}`}
                      >
                        {crime.name}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonDropdown isOpen={dropdownBOpen3} toggle={toggleB3}>
                <DropdownToggle caret>Data Year</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => {
                      year2 = 2016;
                      console.log("year2 is: " + year2);
                    }}
                  >
                    2016
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      year2 = 2015;
                      console.log("year2 is: " + year2);
                    }}
                  >
                    2015
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </DropdownBoxWrapper>
          </SelectionBox>
        </SelectionBoxWrapper>
        <SelectButtonDiv>
          <SubmitButton outline color="success" block onClick={submitData}>
            Submit
          </SubmitButton>
        </SelectButtonDiv>
        <TableDataWrapper>
          <TableDataDiv>
            <Table responsive hover dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </TableDataDiv>
          <TableDataDiv>
            <Table responsive hover dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </TableDataDiv>
        </TableDataWrapper>
      </BodyDiv>
    </>
  );
}
Dropdown.propTypes = {
  a11y: PropTypes.bool, // defaults to true. Set to false to enable more bootstrap like tabbing behavior
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  // For Dropdown usage inside a Nav
  nav: PropTypes.bool,
  active: PropTypes.bool,
  // For Dropdown usage inside a Navbar (disables popper)
  inNavbar: PropTypes.bool,
  tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
  toggle: PropTypes.func,
  setActiveFromChild: PropTypes.bool
};

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "data-toggle": PropTypes.string,
  "aria-haspopup": PropTypes.bool,
  // For DropdownToggle usage inside a Nav
  nav: PropTypes.bool,
  // Defaults to Button component
  tag: PropTypes.any
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool, // default: true,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: PropTypes.object,
  persist: PropTypes.bool, // presist the popper, even when closed. See #779 for reasoning
  // passed to popper, see https://popper.js.org/popper-documentation.html#Popper.Defaults.positionFixed
  positionFixed: PropTypes.bool
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool // default: true
};
