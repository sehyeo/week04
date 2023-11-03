import React from 'react';
import Overview from '../Overview/Overview';

import styled from 'styled-components';
import * as S from './Movie.style';
function Movie({ title, poster_path, vote_average, overview}) {
    return (
        <S.Container className="Container">
            <S.AppContainer className="Contents">
                <S.Img className="img" src={poster_path} />
                <S.Text className="Text">
                    <S.Title className="Title">{title}</S.Title>
                    <S.VoteAverage className="VoteAverage">{vote_average}</S.VoteAverage>
                </S.Text>
                <Overview title={title} overview={overview} />
            </S.AppContainer>
        </S.Container>
    );
}

export default Movie