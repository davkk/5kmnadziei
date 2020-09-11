import React from 'react';
import PropTypes from 'prop-types';

import { FaPhone, FaFlag } from 'react-icons/fa';

import styled from '@emotion/styled';
import css from '@emotion/css';

import { Container, Row, Column, Cta } from '@components/shared';
import { MEDIA } from '@helpers';

import Logo from './Logo';
import Navbar from './Navbar';
import Option from './Option';

const Header = ({ className }) => (
  <header className={className}>
    <Container>
      <Row>
        <Column
          css={css`
            position: relative;
          `}
        >
          <Logo />
        </Column>
        <Column alignMiddle>
          <Navbar>
            <Option to="/cel">
              <FaFlag />
              Nasz cel
            </Option>
            <Option to="/kontakt">
              <FaPhone />
              Kontakt
            </Option>
            <Cta outline href="https://superczas.pl/5kmnadziei" target="_BLANK">
              superczas.pl
            </Cta>
          </Navbar>
        </Column>
      </Row>
    </Container>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Header)`
  padding: 2em 0 4em;

  ${MEDIA.TABLET`
    padding: 1em 0 3em;
  `}

  & ${Column} {
    margin: 0 !important;
  }
`;
