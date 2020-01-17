import React, { useState, useEffect } from 'react';
import pokeLogo from '../assets/poke_logo.png';
import { getPokemons } from '../requests/poke';
import styled from 'styled-components';

const MainScreen = () => {
  const [clicks, setClicks] = useState(0);
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const onClickButton = () => {
    setClicks(clicks + 1);
  };

  const callbackSucess = results => {
    setPokemons(results);
  };

  useEffect(() => {
    getPokemons(page, callbackSucess);
  }, []);

  return (
    <StyledContainer>
      <StyledLogo src={pokeLogo} />
      <StyledLabel>Você clicou no botão {clicks} vezes</StyledLabel>
      <StyledButton onClick={onClickButton}>Clique aqui</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
`;

const StyledLabel = styled.p`
  color: white;
  font-size: 20;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: white;

  :focus {
    outline: 0;
  }
`;

const StyledLogo = styled.img`
  height: 120px;
  width: auto;
  margin-top: 15px;
  resize-mode: contain;
`;

export default MainScreen;
