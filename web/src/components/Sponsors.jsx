import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import {
  Section,
  Container,
  Heading,
  Cta,
  A,
  ImageList,
} from '@components/shared';

const Sponsors = ({ contactUs, sponsors, email }) => (
  <Section>
    <Container>
      <Heading>Wsparcie</Heading>
      <ImageList items={sponsors} numInRow={7} />
      <p
        css={css`
          padding-bottom: 0.7em;
        `}
      >
        {contactUs.text}
      </p>
      <Cta href={`mailto:${email}`}>{contactUs.cta}</Cta>
      <A to="/kontakt">więcej opcji kontaktu</A>
    </Container>
  </Section>
);

Sponsors.propTypes = {
  sponsors: PropTypes.array.isRequired,
  contactUs: PropTypes.shape({
    text: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

export default Sponsors;
