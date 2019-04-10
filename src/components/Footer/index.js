import React from 'react';
import styled from 'styled-components';

import fontSizes from '../../../src/constants/fontSizes';
import colors from '../../../src/constants/colors';

import BottomImage from '../../../src/components/BottomImage';

const Footer = () => (
  <StyledContainer>
    <BottomImage />
  </StyledContainer>
)

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export default Footer;
