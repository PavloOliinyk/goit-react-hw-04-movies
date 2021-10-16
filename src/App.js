import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import Container from './components/Container';

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

        <Route path="/movies">
          <MoviesPage />
        </Route>

        {/* <Route>
          <NotFoundView />
        </Route> */}
      </Switch>
    </Container>
  );
}

export default App;
