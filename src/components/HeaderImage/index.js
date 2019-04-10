import React from 'react';
import styled from 'styled-components';

import headerImage from '../../../src/assets/images/header.png';

const HeaderImage = () => (
  <StyledContainer>
    <img src={headerImage} alt="header" />
  </StyledContainer>
)

const StyledContainer = styled.div`
  text-align: center;
`;

export default HeaderImage;
