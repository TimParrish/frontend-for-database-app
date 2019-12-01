import React, { useEffect, useState } from "react";
import axios from "axios";
import { BodyDiv } from "styles";
var myName = "Hello";

export function Sql() {
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
      </BodyDiv>
    </>
  );
}
