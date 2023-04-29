import React from 'react';
import styled from 'styled-components';

const TopSectionContainer =styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
background-color:#1756dd32;
display:flex;
flex-direction:column;
align-items:center;
padding-top:13%;
z-index:99;
`;

const Logo = styled.h1`
    margin:0;
    color:#fff;
    font-weight:800;
    font-size:80px;
`;

const Slogan = styled.h4`
    margin:0;
    color:#fff;
    font-weight:700;
    font-size:30px;
    margin-top:10px;
`;


const Paragraph = styled.p`
    margin:0;
    margin-top:3em;
    color:#fff;
    font-size:14px;
    line-height:1.5;
    font-weight:500;
    max-width:30%;
    text-align:center;
`;

const DonateButton = styled.button`
    outline:none;
    border:none;
    background-color:#2ee72e;
    color:#fff;
    font-size:16px;
    font-weight:700;
    border-radius:8px;
    padding: 8px 2em;
    margin-top:3em;
    cursor:pointer;
    border:2px solid transparent;
    transition:all 350ms ease-in-out;

    &:hover{
        background-color:transparent;
        border:2px solid #27b927;
    }
`;


const MadeBy= styled.h3`
    color:#fff;
    position:fixed;
    bottom:5px;
    left:50%;
    transform:translateX(-50%);

    & a, a:visited, a:hover, a:active{
        color:#fff;
        text-decoration:none;
    }
`;


export function TopSection(){

    return(
        <TopSectionContainer>
            <Logo>STARK TRAILS</Logo>
            <Slogan>Travel across the globe with us.</Slogan>
            <Paragraph>
                travel the world with us and join the once in a lifetime experience.
            </Paragraph>
        </TopSectionContainer>
    )
}