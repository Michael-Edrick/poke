import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


export function PokeListComponent({pokemon}) {
    return (
        <Card>
            <Link
                to={{
                    pathname: "/poke-detail-container",
                    state: { pokemon: pokemon }
                }}
            >
                <H2>{pokemon.name}</H2>
                <img 
                    src={pokemon.image}
                    alt={pokemon.name}
                />
                <h3>
                        Owned: 0
                </h3>
            </Link>
        </Card>
    )
}

const H2 = styled.h2`
    font-size: 20px;
    color: white;
    text-transform: capitalize;
    margin: 0;
`;



const Card = styled.div`
    border-radius: 25px;
    width: 150px;
    height: 110px;
    margin: 8px;
    padding: 8px;
    background-color: #c6eced;

    @media screen and (max-width: 960px) {
        width: 150px;
        heigth:110px;
    }

    img {
        padding: 0;
        margin: 0;
        float: right;
    }

    h3 {
        font-size: 14px;
        color: white;
        text-transform: capitalize;
        background: #a0cdce;
        border-radius: 5px;
        margin: 0;
        width: -moz-fit-content;
        width: fit-content;
        padding-left: 3px;
    }

    a {
        text-decoration: none;
    }
`;

