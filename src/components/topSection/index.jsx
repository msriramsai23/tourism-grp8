import React from 'react';
import styled from 'styled-components';

const TopSectionContainer =styled.div`
position:absolute;
width:100%;
height:75%;
top:0;
left:0;

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