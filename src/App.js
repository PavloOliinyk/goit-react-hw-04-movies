import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Container from './components/Container';
import ErrorPage from './components/ErrorPage';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Suspense
          fallback={
            <Loader
              type="Oval"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
              style={{ textAlign: 'center' }}
            />
          }
        >
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

            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
