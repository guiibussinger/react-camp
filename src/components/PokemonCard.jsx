import React from "react";
import styled from "styled-components";

const PokemonCard = ({ pokemon: { name, index } }) => (
  <StyledCard>
    <StyledName>{name}</StyledName>
    <StyledImage
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
    />
  </StyledCard>
);

const StyledCard = styled.div`
  width: 18%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 15px;
  background-color: #182634;

  :hover {
    background-color: #1c2f42;
  }
`;

const StyledName = styled.p`
  font-size: 18;
  color: white;
  text-transform: capitalize;
`;

const StyledImage = styled.img`
  height: 170px;
  width: 170px;
  margin-top: 15px;
  resize-mode: contain;
`;
export default PokemonCard;
