import React from 'react';

import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
export const GlobalStyles=createGlobalStyle`
    body {
    background-color:rgb(44, 29, 130);
    }  
`;

// app-container 스타일
export const AppContainer=styled.div`
    display:grid;
    margin-left:40px;
    margin-top:20px;
    width:100px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: (3, 1fr);
`;
export const Container=styled.div`
    width:180px;
    height:380px;
    margin-bottom:100px;
`;
export const Img=styled.img`
    width:180px;
    height:380px;
    margin-bottom:20px;
`;
export const Text=styled.div`
    display:grid;
    background-color:rgb(92, 62, 201);
    color:white;
    padding-left:15px;
    letter-spacing:3px;
    height:60px;
    width:163px;

    margin-top:400px;
    margin-left:-180px;
`;
export const Title=styled.div`
    width:80%;
    font-size:13px;
`;
export const VoteAverage=styled.div`
    text-align:center;
    width:40px;
    font-size:12px;
    color:rgb(174, 174, 174);
`;