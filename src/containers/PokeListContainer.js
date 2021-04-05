import React from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GET_POKEMONS } from '../graphql/get-pokemon';
import { PokeListComponent } from '../components/PokeListComponent';


export function PokeListContainer () {
  const { 
    loading,
    error, 
    data } = useQuery(GET_POKEMONS, {
    variables: {limit: 15, offset: 0},
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <Container>
          {
              data &&
              data.pokemons.results &&
              data.pokemons.results.map((pokemon) => (
                  <PokeListComponent pokemon={pokemon}/>
              ))
          }
      </Container>
  );
};


const Container = styled.div`
  width: 546px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;  
  justify-content: left;
  background: grey;

  @media screen and (max-width: 630px) {
    width: 365px;
  }
`;