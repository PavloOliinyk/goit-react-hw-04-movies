import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        {/* <Route>
          <NotFoundView />
        </Route> */}
      </Switch>
    </Container>
  );
}

export default App;
