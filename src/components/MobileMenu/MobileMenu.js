/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay>
      <DialogContent>
        <StyledMobileMenu>
            <StyledCloseButton onClick={onDismiss}>
              <Icon id="close" color="#000" size="26" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </StyledCloseButton>
            <StyledNav>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </StyledNav>
            <StyledFooter>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </StyledFooter>
        </StyledMobileMenu>
      </DialogContent>
    </DialogOverlay>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: ${COLORS.gray[900]};

    &:not(:focus-visible) {
      outline: none;
    }

    &:hover {
      text-decoration: revert;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  padding: 0 30px;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${COLORS.gray[900]};

    &:not(:focus-visible) {
      outline: none;
    }

    &:hover {
      text-decoration: revert;
    }
  }
`;

const StyledMobileMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  padding-bottom: 20px;
  top: 0;
  left: 0;
  z-index: 5;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: 0;
  padding: 15px;
  cursor: pointer;
`;

export default MobileMenu;
