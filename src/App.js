import Movie from "./Components/Movie/Movie";
import { movies } from "./movieDummy";
import * as S from "./Components/Movie/Movie.style";
import * as O from "./Components/Overview/Overview.style";
import Overview from "./Components/Overview/Overview";

function App(movies) {
  return (
    <S.AppContainer className="app-container">
      {movies.results.map((item) => {
        return (
          <>
            <S.Container>
              <S.AppContainer>
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}
                />
              </S.AppContainer>
              <O.Container></O.Container>
              <O.OverviewContent></O.OverviewContent>
            </S.Container>
          </>
        );
      })}
    </S.AppContainer>
  );
}

export default App;
