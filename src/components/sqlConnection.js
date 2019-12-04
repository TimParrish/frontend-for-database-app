import React, { useEffect, useState } from "react";
import axios from "axios";
import { BodyDiv } from "styles";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

var myName = "Hello";

export function Sql() {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownOpen2, setOpen2] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setOpen2(!dropdownOpen2);
  var serverJSONResponse = [];

  //TODO: remove next line after initial testing complete
  const [, updateRender] = useState();

  async function accessData() {
    myName = "updated";
    console.log("from inside access data before GET req, myName = " + myName);
    await axios.get(`http://138.68.17.167:443/test`).then(result => {
      myName = result.data[0].name;
      console.log(myName);
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

  //call the server for an initial test
  useEffect(() => {
    accessData();
  }, []);

  return (
    <>
      <BodyDiv>
        <p>{myName}</p>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Operation</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>select an operation</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>SELECT</DropdownItem>
            <DropdownItem>INSERT</DropdownItem>
            <DropdownItem>DELETE</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
          <DropdownToggle caret>Data Table</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>select an data table</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>NON_VIOLENT_CRIME</DropdownItem>
            <DropdownItem>VIOLENT_CRIME</DropdownItem>
            <DropdownItem>REGION</DropdownItem>
            <DropdownItem>SUB_REGION</DropdownItem>
            <DropdownItem>CRIME</DropdownItem>
            <DropdownItem>PERSON</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </BodyDiv>
    </>
  );
}
