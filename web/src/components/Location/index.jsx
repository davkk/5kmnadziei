import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import { Section, Container, Row, Column, Textbox } from '@components/shared';
import { BLUE_GRADIENT, GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';

import Map from './Map';

const Location = ({ location }) => (
  <Section background={BLUE_GRADIENT}>
    <Container
      css={css`
        color: white;
        padding: 2em 0;
      `}
    >
      <Row
        css={css`
          ${MEDIA.SDESKTOP`
            flex-direction: column-reverse;
          `}
        `}
      >
        <Column
          css={css`
            ${MEDIA.SDESKTOP`
              margin: 2em 0 0 !important;
            `}
          `}
        >
          <Map />
        </Column>
        <Column alignMiddle>
          <Textbox
            css={css`
              & p strong {
                color: ${GRAY_BLUE};
              }
            `}
            spaceBottom
            align="center"
            blocks={location}
          />
        </Column>
      </Row>
    </Container>
  </Section>
);

Location.propTypes = {
  location: PropTypes.array.isRequired,
};

export default Location;
