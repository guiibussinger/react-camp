import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PokemonCard from "./PokemonCard";

import { getPokemons } from "../requests/poke";

const icArrowLeft =
  "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_left-512.png";

const icArrowRight =
  "https://cdn4.iconfinder.com/data/icons/arrows-249/24/small_chevron_arrow_right-512.png";

const Table = () => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const callbackSucess = results => {
    setPokemons(results);
  };

  useEffect(() => {
    getPokemons(page, callbackSucess);
  }, [page]);

  const decreasePage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const increasePage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <StyledRow>
        <StyledButton src={icArrowLeft} onClick={decreasePage} />
        <StyledButton src={icArrowRight} onClick={increasePage} />
      </StyledRow>
      <StyledTable>
        {pokemons.map((poke, index) => (
          <PokemonCard pokemon={{ ...poke, index: page * 20 + (index + 1) }} />
        ))}
      </StyledTable>
    </>
  );
};

const StyledTable = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 15px;
  background-color: #15202b;
`;

const StyledButton = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: white;
  resize-mode: contain;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: lightgray;
  }
`;

const StyledRow = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
`;

export default Table;
