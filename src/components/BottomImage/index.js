import React from 'react';
import styled from 'styled-components';

import bottomImage from '../../../src/assets/images/bottom.png';

const BottomImage = () => (
  <StyledContainer>
    <img src={bottomImage} alt="header" />
  </StyledContainer>
)

const StyledContainer = styled.div`
  text-align: center;
`;

export default BottomImage;
