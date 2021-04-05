// import React, { Component } from 'react';
// import { useQuery } from '@apollo/client';
// import styled from '@emotion/styled';
// import { GET_POKEMON } from '../graphql/get-pokemon';


// export function MyPokeComponent () {
//     // const pokemonName = "bulbasaur";

//     // const { 
//     // loading,
//     // error, 
//     // data } = useQuery(GET_POKEMON, {
//     // variables: {name: pokemonName},
//     // });

//     // if (loading) return 'Loading...';
//     // if (error) return `Error! ${error.message} ${pokemonName}`;

//     return (
//         <Container>
//             <Back>
//                 <Pic 
//                     src={data.pokemon.sprites.front_default}
//                     alt={data.pokemon.name}
//                 />
                
//                 <Catch>
//                     Catch!
//                 </Catch>

//             </Back>
//         </Container>
//     );
// };


// const Container = styled.div`
//     display: flex;
//     flex-wrap: wrap;  
//     justify-content: center;
// `;

// const Pic = styled.img``;

// const Back = styled.div``;

// const Catch = styled.button`
//     padding: 0.8rem;
//     margin-bottom: 3rem;
//     cursor: pointer;
//     border-radius: 15px;
//     border: none;
//     outline: none;
//     font-weight: 800;
//     text-transform:uppercase;
//     &: hover {
//     background-color: #CC2020;
//     color: #F3F3F3;
//     }
// `;