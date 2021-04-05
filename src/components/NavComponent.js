import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';


const Navbar = () => {
    const pathName = useLocation().pathname;


    // State
    const [isSidebarOpen, setSidebarState] = useState(false);

    console.log(`Is sidebar open ${isSidebarOpen}`);

    return (
        <Navigation>
            <Hamburger onClick={() => setSidebarState(!isSidebarOpen)}>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </Hamburger>
            <NavLink isSidebarOpen={isSidebarOpen}>
                <FontBox isSidebarOpen={isSidebarOpen}>
                    <Link
                        to="/poke-list-container"
                        className={pathName === "/poke-list-container" ? "active" : ""}
                    >
                        <Font isSidebarOpen={isSidebarOpen}>PokeList</Font>
                    </Link>

                    <Link
                        to="/my-poke-container"
                        className={pathName === "/my-poke-container" ? "active" : ""}
                    >
                        <Font isSidebarOpen={isSidebarOpen}>MyPoke</Font>
                    </Link>
                    
                </FontBox>
            </NavLink>
        </Navigation>
    )
}


const Navigation = styled.nav`
    height: 10vh;

    @media screen and (max-width: 768px){
        position: relative;
    }
`;

const Hamburger = styled.div`
    @media screen and (max-width: 768px){
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        background: lightgreen;
    }
`

const Line = styled.div`
    @media screen and (max-width: 768px){
        width: 30px;
        height: 3px;
        background: white;
        margin: 5px;
    }
`

const NavLink = styled.div`
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;

    @media screen and (max-width: 768px){
        position: right;
        background: lightgrey;
        height: 150vh;
        width: ${p => p.isSidebarOpen ? '0%' : '35%'};
        flex-direction: column;
        transition: .2s ease-in all;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-family: sans-serif;
    }
`

const FontBox = styled.div`
    @media screen and (max-width: 768px){
        background: lightgrey;
        width: ${p => p.isSidebarOpen ? '0%' : '35%'};
        height: 10vh;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        box-sizing: border-box;
        top: 100%;
        position: absolute;
        transition: .2 ease-in all;
    }
`

const Font = styled.h3`
    @media screen and (max-width: 768px){
        display: ${p => p.isSidebarOpen ? 'none' : 'flex'};
    }
`



export default Navbar;

