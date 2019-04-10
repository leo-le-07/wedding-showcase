import React from 'react';
import styled from 'styled-components';

import landingImage from '../../src/assets/images/landing.jpg';

const Home = () => (
  <StyledContainer>
    <img src={landingImage} alt="landing" className="responsive" />
  </StyledContainer>
);

const StyledContainer = styled.div`
  .responsive {
    width: 100%;
    height: auto;
  }
`;

export default Home;
