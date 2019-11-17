import React from "react";
import { ServerRoom, Handcuffs, CrimeScene } from "./images";
import {
  Header,
  Footer,
  FlexBoxContainer,
  FlexImage,
  LeftImageDiv,
  RightImageDiv,
  BodyDiv,
  MarqueeImage,
  FullPageStyle
} from "./styles";

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
      </FullPageStyle>
    </>
  );
}

export default App;
