import React from "react";
import { ServerRoom, Handcuffs, CrimeScene } from "images";
import {
  Header,
  FlexBoxContainer,
  FlexImage,
  MarqueeImage,
  FullPageStyle
} from "./styles";
import { Footer, Sql } from "components";

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
          <Sql />
          <FlexImage src={CrimeScene} alt="Crime scene with crime scene tape" />
        </FlexBoxContainer>
        <Footer />
      </FullPageStyle>
    </>
  );
}

export default App;
