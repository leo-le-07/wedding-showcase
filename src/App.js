import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import routes from './constants/routes';
import Home from '../src/screens/Home';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const App = () => (
  <Router>
    <StyledContainer fluid>
      <Header />
      <Content>
        <Navigation />
        <Route exact path={routes.HOME} component={Home} />
      </Content>
      <Footer />
    </StyledContainer>
  </Router>
)

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

export default App;
