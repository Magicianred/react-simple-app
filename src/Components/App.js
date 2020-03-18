import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import WhoAre from './Pages/WhoAre';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';
// import pages from './../pages.json';

const siteName = 'Simple App React';

function App() {
  return (
    <Container className="App">
      <Header title={siteName} />
        <Router>
            <Switch>
              {/* {pages.map(page => <Route exact path={page.path} component={page.component} />)} */}
              <Route exact path="/" component={Home} />
              <Route exact path="/whoare" component={WhoAre} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
        </Router>
      <Footer />
    </Container>
  );
}

export default App;
