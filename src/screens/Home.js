import React from 'react';
import styled from 'styled-components';

import landingImage from '../../src/assets/images/landing.jpg';

const Home = () => (
  <StyledContainer>
    <img src={landingImage} alt="landing" />
  </StyledContainer>
);

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
