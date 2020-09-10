import React from 'react';
import PropTypes from 'prop-types';

import { FaPhone, FaListUl } from 'react-icons/fa';

import styled from '@emotion/styled';
import css from '@emotion/css';

import { useHomepageQuery } from '@queries';
import { Container, Row, Column, Cta } from '@components/shared';
import { MEDIA } from '@helpers';

import Logo from './Logo';
import Navbar from './Navbar';
import Option from './Option';

const Header = ({ className }) => {
  const { signup } = useHomepageQuery();

  return (
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
              <Option to="/kontakt">
                <FaPhone />
                Kontakt
              </Option>
              <Option to="/regulamin">
                <FaListUl />
                Regulamin
              </Option>
              <Cta
                outline
                href={signup.childMarkdownRemark.frontmatter.href}
                target="_BLANK"
              >
                superczas.pl
              </Cta>
            </Navbar>
          </Column>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
  pageTitle: PropTypes.string,
};

export default styled(Header)`
  padding: 2em 0 3em;

  ${MEDIA.TABLET`
    padding: 1em 0 3em;
  `}

  & ${Column} {
    margin: 0 !important;
  }
`;
