import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MenuButton onClick={() => console.log(true)}>
          <Icon id="search" color="#000" size={32} />
        </MenuButton>
        <MenuButton onClick={() => console.log(true)}>
          <Icon id="shopping-bag" color="#000" size={32} />
        </MenuButton>
        <MobileMenuButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" color="#000" size={32} />
          <VisuallyHidden>Ouvrir le menu</VisuallyHidden>
        </MobileMenuButton>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 5px solid ${COLORS.gray[900]};

  @media (min-width: ${BREAKPOINTS.desktop.min}rem) {
    align-items: baseline;
    border: 0;
    overflow: scroll;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: max(
    6vw,
    40px
  );
  margin: 0px 48px;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.desktop.min}rem) {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0 10px;

  @media (min-width: ${BREAKPOINTS.desktop.min}rem) {
    display: none;
  }
`;


const MenuButton = styled.button`
  display: block;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;

  @media (min-width: ${BREAKPOINTS.desktop.min}rem) {
    display: none;
  }
`;


export default Header;
