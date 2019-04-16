import React from 'react';
import styled from 'styled-components';

import fontSizes from '../../../src/constants/fontSizes';
import colors from '../../../src/constants/colors';

import HeaderImage from '../../components/HeaderImage';

const Header = () => (
  <StyledContainer>
    <HeaderImage />
    <div className="name">Đô Na & Minh Châu</div>
    <div className="date-address">18.06.2019 - Quảng Nam</div>
  </StyledContainer>
)

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: ${fontSizes.large60};
    color: ${colors.primary};
    font-family: 'Parisienne', cursive;
  }

  .date-address {
    /* font-family: 'Muli', sans-serif; */
    font-size: ${fontSizes.large30};
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 600px) {
    .name {
      font-size: ${fontSizes.large45};
    }
  }
`;

export default Header;
