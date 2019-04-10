import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import routes from './constants/routes';

import Home from '../src/screens/Home';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HeaderImage from '../src/components/HeaderImage';

const App = () => (
  <Router>
    <div>
      <HeaderImage />
      <Header />
      <Navigation />
      <Route exact path={routes.HOME} component={Home} />
      <Footer />
    </div>
  </Router>
)

export default App;
