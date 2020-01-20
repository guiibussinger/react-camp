import React from "react";
import pokeLogo from "../assets/poke_logo.png";
import styled from "styled-components";

import Table from "./Table";

const MainScreen = () => (
  <StyledContainer>
    <StyledLogo src={pokeLogo} />
    <Table />
  </StyledContainer>
);

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  background-color: #0d121b;
`;

const StyledLogo = styled.img`
  height: 120px;
  width: auto;
  margin-top: 15px;
  resize-mode: contain;
`;

export default MainScreen;
