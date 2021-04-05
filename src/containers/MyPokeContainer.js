import react, { Component } from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GET_POKEMON, GET_POKEMONS } from '../graphql/get-pokemon';
import { MyPokeComponent } from '../components/MyPokeComponent';

// export function Loop() {

//     var valuesback = [],
//         values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length,
//         j = keys.length - 1,
//         o = 0;

//     while ( i-- ) {
//         valuesback.push( localStorage.getItem(localStorage.key(i)) );
//     }

//     while ( j-- ) {
//         values.push( valuesback[j] );
//         o = o + 1;
//     }

//     return values;
// }


export function MyPokeContainer () {
    
    const pokemonName = data.pokemon.name;

    var valuesback = [],
        values = [],
        keys = Object.keys(localStorage),
        i = keys.length,
        j = keys.length - 1,
        o = 0;

    while ( i-- ) {
        valuesback.push( localStorage.getItem(localStorage.key(i)) );
    }

    while ( j-- ) {
        values.push( valuesback[j] );
        o = o + 1;
    }

    const { 
      loading,
      error, 
      data } = useQuery(GET_POKEMON, {
      variables: {name: pokemonName},
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <Container>
            {
                values.map((pokemon) => (
                    <Back>
                        <Pic 
                            src={data.pokemon.sprites.front_default}
                            alt={data.pokemon.name}
                        />
                    
                        <Catch>
                            Catch!
                        </Catch>

                    </Back>
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

const Pic = styled.img``;

const Back = styled.div``;

const Catch = styled.button`
    padding: 0.8rem;
    margin-bottom: 3rem;
    cursor: pointer;
    border-radius: 15px;
    border: none;
    outline: none;
    font-weight: 800;
    text-transform:uppercase;
    &: hover {
    background-color: #CC2020;
    color: #F3F3F3;
    }
`;