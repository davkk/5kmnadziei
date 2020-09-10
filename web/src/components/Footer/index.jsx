import React from 'react';

import css from '@emotion/css';

import { Section, Container, Row, Column } from '@components/shared';
import { BLUE_GRADIENT } from '@constants';
import { MEDIA } from '@helpers';
import { useGlobalsQuery } from '@queries';

import Socials from './Socials';
import Donate from './Donate';
import Copyright from './Copyright';

const Footer = () => {
  const { donate, copyright } = useGlobalsQuery();

  return (
    <Section
      as="footer"
      background={BLUE_GRADIENT}
      css={css`
        padding: 2.5em 0 1.5em;
        margin-bottom: 0;

        ${MEDIA.SDESKTOP`
          padding-bottom: 5em;
        `}
      `}
    >
      <Container>
        <Row>
          <Column>
            <Socials />
          </Column>
          <Column>
            <Donate donate={donate} />
          </Column>
        </Row>
        <Copyright msg={copyright} />
      </Container>
    </Section>
  );
};

export default Footer;
