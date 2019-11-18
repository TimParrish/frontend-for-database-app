import React from "react";
import { ServerRoom, Handcuffs, CrimeScene } from "images";
import {
  Header,
  FlexBoxContainer,
  FlexImage,
  BodyDiv,
  MarqueeImage,
  FullPageStyle
} from "./styles";
import { Footer } from "components";

document.title = "FBI Crime Data";

function App() {
  return (
    <>
      <FullPageStyle>
        <Header>
          <MarqueeImage src={ServerRoom} alt="Server Room with tile floor" />
          <h1>FBI Crime Statistics for 2015 and 2016</h1>
        </Header>
        <FlexBoxContainer>
          <FlexImage src={Handcuffs} alt="Handcuffs and handcuff key" />
          <BodyDiv>
            <p>
              Dropdown menus that will create the mySql statement will go here
              and use Axios to make a HTTP request to the mySql server that is
              hosted on DigitialOcean.com
            </p>
          </BodyDiv>
          <FlexImage src={CrimeScene} alt="Crime scene with crime scene tape" />
        </FlexBoxContainer>
        <Footer />
      </FullPageStyle>
    </>
  );
}

export default App;
