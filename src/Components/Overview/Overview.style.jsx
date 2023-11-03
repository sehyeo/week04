import React from 'react';

import styled from 'styled-components';

export const OverviewContent=styled.div`
    display:none;
    padding:10px;
    font-size:9px;
    background-color:rgb(0,0,0);
    height:290px;
    width:160px;
    &:hover {
        .overview {
            cursor:pointer;
            display:flex;
            color:white;
            opacity:0.6;
            height:360px;
        }
    }
`;
export const Container=styled.div`
    width:180px;
    height:380px;
    
`;