import React from 'react';
import styled from 'styled-components';
import * as O from './Overview.style';

function Overview({title, overview}) {
    return (
        <O.Container className="Poster_Overview">
            <O.OverviewContent className="overview">
                {title}
                <br/>
                <br/>
                {overview}
            </O.OverviewContent>
        </O.Container>
    );
};

export default Overview