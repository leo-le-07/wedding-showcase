import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import fontSizes from '../../../src/constants/fontSizes';
import colors from '../../../src/constants/colors';
import routes from '../../../src/constants/routes';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { pathname } = props.location;

  return (
    <StyledContainer>
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className={pathname === routes.HOME ? 'custom-active' : ''}>
              <Link to={routes.HOME} className="custom-nav-link">Lời mời</Link>
            </NavItem>
            <NavItem className={pathname === routes.PHOTOS ? 'custom-active' : ''}>
              <Link to={routes.PHOTOS} className="custom-nav-link">Hình ảnh</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
  .navbar-collapse {
    justify-content: center;
  }

  .nav-item {
    font-size: ${fontSizes.large30};
  }

  .custom-active {
    .custom-nav-link {
      color: ${colors.primary};
    }
  }

  .custom-nav-link {
    text-transform: uppercase;
    color: ${colors.secondary};
    margin: 0 20px;

    &:focus {
      color: ${colors.primary};
    }

    &:hover {
      color: ${colors.primary};
      text-decoration: none;
    }
  }

  .nav-item {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export default withRouter(Navigation);
