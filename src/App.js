import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import LocationList from './components/LocationList';
import Location from './pages/Location';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('./logements.json')
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Showcase title="Chez vous, partout et ailleurs" />
              <LocationList locations={this.state.items} />
            </Route>
            <Route
              exact
              path="/location/:id"
              render={(props) => (
                //<ErrorBoundary>
                <Location
                  id={props.match.params.id}
                  data={this.state.items}
                  {...props}
                />
                //</ErrorBoundary>
              )}
            />
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
