import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
      Made with ♥ by&nbsp;<a href="https://github.com/Shamindra19/">Shamindra Sen</a>
    </FooterDiv>
  );
}
