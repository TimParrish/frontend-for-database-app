import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { StatesList, CrimeNamesList } from "utilities";
import { JsonToTable } from "react-json-to-table";
import {
  BodyDiv,
  DropdownBoxWrapper,
  SelectButtonDiv,
  SelectionBox,
  SelectionBoxWrapper,
  SubmitButton,
  QuerySelectionWrapper,
  TableDataDiv
} from "styles";
import {
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const apiURL = 'http://157.245.183.102';
const apiPortNumber = 443;
let apiResponse1 = [];
let apiResponse2 = [];
let dataQuery1 = "";
let dataQuery2 = "";
let state1 = "";
let state2 = "";
let year1;
let year2;
let crime1 = "";
let crime2 = "";
let crime1Table = "";
let crime2Table = "";
let compareStateData = false;
let showMaxData = false;
let showMinData = false;
let totalsByYear = false;
let querySelection = "Select your search parameters";
let querySelectionMadeByUser = false;

export function Sql() {
  const [dropdownMainOpen, setDropdownMainOpen] = useState(false);
  const [dropdownAOpen1, setAOpen1] = useState(false);
  const [dropdownAOpen2, setAOpen2] = useState(false);
  const [dropdownAOpen3, setAOpen3] = useState(false);
  const [dropdownBOpen1, setBOpen1] = useState(false);
  const [dropdownBOpen2, setBOpen2] = useState(false);
  const [dropdownBOpen3, setBOpen3] = useState(false);
  const [, updateRender] = useState();
  const toggleMain = () => setDropdownMainOpen(!dropdownMainOpen);
  const toggleA1 = () => setAOpen1(!dropdownAOpen1);
  const toggleA2 = () => setAOpen2(!dropdownAOpen2);
  const toggleA3 = () => setAOpen3(!dropdownAOpen3);
  const toggleB1 = () => setBOpen1(!dropdownBOpen1);
  const toggleB2 = () => setBOpen2(!dropdownBOpen2);
  const toggleB3 = () => setBOpen3(!dropdownBOpen3);

  async function accessData() {
    await axios.get(`${apiURL}:${apiPortNumber}/${dataQuery1}`).then(result => {
      apiResponse1 = result.data;
      console.log(apiResponse1);

      if (compareStateData) {
        axios.get(`${apiURL}:${apiPortNumber}/${dataQuery2}`).then(result => {
          apiResponse2 = result.data;
          console.log(apiResponse2);
          updateRender(n => !n);
        });
      }
    });
    updateRender(n => !n);
  }

  function submitData() {
    if (compareStateData) {
      dataQuery1 = `${crime1Table}/${crime1}/${state1}/${year1}`;
      dataQuery2 = `${crime2Table}/${crime2}/${state2}/${year2}`;
    }

    if (showMinData) {
      if (crime1Table === "violent") {
        dataQuery1 = `violentMinData/${crime1}/${year1}`;
        dataQuery2 = "";
      } else {
        dataQuery1 = `nonViolentMinData/${crime1}/${year1}`;
        dataQuery2 = "";
      }
    }

    if (showMaxData) {
      if (crime1Table === "violent") {
        dataQuery1 = `violentMaxData/${crime1}/${year1}`;
        dataQuery2 = "";
      } else {
        dataQuery1 = `nonViolentMaxData/${crime1}/${year1}`;
        dataQuery2 = "";
      }
    }

    if (totalsByYear) {
      dataQuery1 = `nationalAggregateTotal/${year1}`;
      dataQuery2 = "";
    }

    console.log("dataQuery1 is: " + dataQuery1);
    compareStateData && console.log("dataQuery2 is: " + dataQuery2);
    accessData();
  }

  function resetValues() {
    apiResponse1 = "";
    apiResponse2 = "";
    apiResponse1 = [];
    apiResponse2 = [];
    dataQuery1 = "";
    dataQuery2 = "";
    state1 = "Select State";
    state2 = "Select State";
    year1 = "Select Year";
    year2 = "Select Year";
    crime1 = "Select Crime";
    crime2 = "Select Crime";
    crime1Table = "";
    crime2Table = "";
    compareStateData = false;
    showMaxData = false;
    showMinData = false;
    totalsByYear = false;
  }

  return (
    <BodyDiv>

      {/* Main query selection dropdown */}
      <QuerySelectionWrapper>
        <ButtonDropdown isOpen={dropdownMainOpen} toggle={toggleMain}>
          <DropdownToggle caret color="primary">
            {querySelection}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                resetValues();
                compareStateData = true;
                querySelection = "side-by-side";
                querySelectionMadeByUser = true;
                console.log("compareStateData is: " + compareStateData);
              }}
            >
              Side-by-side data comparison
              </DropdownItem>
            <DropdownItem
              onClick={() => {
                resetValues();
                showMaxData = true;
                querySelection = "highest-crime";
                querySelectionMadeByUser = true;
                console.log("looking for a high crime state:");
              }}
            >
              Find the state with highest crime
              </DropdownItem>
            <DropdownItem
              onClick={() => {
                resetValues();
                showMinData = true;
                querySelection = "lowest-crime";
                querySelectionMadeByUser = true;
                console.log("looking for a low crime state:");
              }}
            >
              Find the state with lowest crime
              </DropdownItem>
            <DropdownItem
              onClick={() => {
                resetValues();
                totalsByYear = true;
                querySelection = "national-totals";
                querySelectionMadeByUser = true;
                console.log("looking for a totals by year:");
              }}
            >
              Aggregate national totals by year
              </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </QuerySelectionWrapper>

      {/* Conditionally rend the user dropdowns after the initial selection is made */}
      {querySelectionMadeByUser && <>
        <SelectionBoxWrapper>
          <SelectionBox>
            <DropdownBoxWrapper>
              {compareStateData && (
                <>
                  <ButtonDropdown isOpen={dropdownAOpen1} toggle={toggleA1}>
                    <DropdownToggle caret>{state1}</DropdownToggle>
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
                </>
              )}
              {!totalsByYear && (
                <>
                  <ButtonDropdown isOpen={dropdownAOpen2} toggle={toggleA2}>
                    <DropdownToggle caret>{crime1}</DropdownToggle>
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
                </>
              )}
              <ButtonDropdown isOpen={dropdownAOpen3} toggle={toggleA3}>
                <DropdownToggle caret>{year1}</DropdownToggle>
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
            <TableDataDiv>
              {apiResponse1 && <JsonToTable json={apiResponse1} />}
            </TableDataDiv>
          </SelectionBox>

          {/* If a side-by-side comparison, render dropdowns for second state */}
          {compareStateData && (
            <SelectionBox>
              <DropdownBoxWrapper>
                <ButtonDropdown isOpen={dropdownBOpen1} toggle={toggleB1}>
                  <DropdownToggle caret>{state2}</DropdownToggle>
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
                  <DropdownToggle caret>{crime2}</DropdownToggle>
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
                  <DropdownToggle caret>{year2}</DropdownToggle>
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
              <TableDataDiv>
                <JsonToTable json={apiResponse2} />
              </TableDataDiv>
            </SelectionBox>
          )}
        </SelectionBoxWrapper>

        <SelectButtonDiv>
          <SubmitButton outline color="success" block onClick={submitData}>
            Submit
          </SubmitButton>
        </SelectButtonDiv>
      </>
      }
    </BodyDiv>
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
