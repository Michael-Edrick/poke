import React, { Component } from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GET_POKEMON } from '../graphql/get-pokemon';
import { GetName, Form } from '../components/FunctionClick';
import { MyPokeContainer, Loop } from '../containers/MyPokeContainer';


export function PokeDetailComponent (result) {
    const current = result.pokemon;
    const pokemonName = current.pokemon.name;

    const { 
    loading,
    error, 
    data } = useQuery(GET_POKEMON, {
    variables: {name: pokemonName},
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message} ${pokemonName}`;

    return (
        <Container>
            <Back>
                <Pic 
                    src={data.pokemon.sprites.front_default}
                    alt={data.pokemon.name}
                />
                
                <Form name={data.pokemon.name} />
                

                <Catch>
                    Catch!
                </Catch>


                <div>{data.pokemon.move}</div>
            </Back>
                {data.pokemon.types ? (
                    <div className="type">
                        <h5>Types:</h5>
                        <div className="attributes">
                            {data.pokemon.types.map((type) => (
                                <div className="round">
                                    {type.type.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                {data.pokemon.abilities ? (
                    <div className="type">
                        <h5>Abilities:</h5>
                        <div className="attributes">
                            {data.pokemon.abilities.map((ability) => (
                                <div className="round">
                                    {ability.ability.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                {data.pokemon.types ? (
                    <div className="type">
                        <h5>Moves:</h5>
                        <div className="attributes">
                            {data.pokemon.moves.map((move) => (
                                <div className="round">
                                    {move.move.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            <Back>

            </Back>
        </Container>
    );
};



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;  
    justify-content: center;
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