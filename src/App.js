import React from "react";
import "./App.css";
// import { Formik } from "formik";
import { ServerRoom, Handcuffs, CrimeScene } from "./images";
import {
  Footer,
  MainContent,
  LeftImageDiv,
  RightImageDiv,
  BodyDiv,
  MarqueeImage
} from "./styles";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <MarqueeImage src={ServerRoom} alt="Server Room with tile floor" />
          <h1>Query the FBI Crime Statistics for 2015 and 2016</h1>
        </header>
      </div>
      <MainContent>
        <LeftImageDiv>
          <img src={Handcuffs} alt="Handcuffs and handcuff key" />
        </LeftImageDiv>
        <BodyDiv>
          <p>
            Dropdown menus that will create the mySql statement will go here and
            use Axios to make a HTTP request to the mySql server that is hosted
            on DigitialOcean.com
          </p>
        </BodyDiv>
        <RightImageDiv>
          <img src={CrimeScene} alt="Crime scene with crime scene tape" />
        </RightImageDiv>
      </MainContent>
      <Footer>
        <h4>Credit for images used:</h4>
        <p>
          Image courtesy of Taylor Vick on unsplash.com
          https://unsplash.com/@tvick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
        </p>
        <p>
          Handcuff image courtesy of Bill Oxford on unsplash.com
          https://unsplash.com/@bill_oxford?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
        </p>
        <p>
          Crime scene tape image courtesy of David von Diemar on unsplash.com
          https://unsplash.com/@davidvondiemar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
        </p>
      </Footer>
    </>
  );
}

export default App;
