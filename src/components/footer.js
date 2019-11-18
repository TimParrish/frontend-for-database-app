import React from "react";
import { FooterStyle } from "styles";

export function Footer() {
  return (
    <>
      <FooterStyle>
        <h4>Credit for images used:</h4>
        <p>
          Server Room image courtesy of{" "}
          <a href="https://unsplash.com/@tvick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Taylor Vick
          </a>
          <br></br>
          Handcuff image courtesy of{" "}
          <a href="https://unsplash.com/@bill_oxford?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Bill Oxford
          </a>
          <br></br>
          Crime Scene image courtesy of{" "}
          <a href="https://unsplash.com/@davidvondiemar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            David von Diemar
          </a>
        </p>
      </FooterStyle>
    </>
  );
}
