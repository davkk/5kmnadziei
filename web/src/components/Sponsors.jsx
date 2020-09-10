import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import {
  Section,
  Container,
  Heading,
  Textbox,
  Cta,
  A,
  ImageList,
} from '@components/shared';

const Sponsors = ({ sponsors, email }) => (
  <Section>
    <Container>
      <Heading dangerouslySetInnerHTML={{ __html: sponsors.heading }} />
      <ImageList items={sponsors.logos} numInRow={7} />
      <Textbox>
        <p
          css={css`
            padding-bottom: 1em !important;
          `}
        >
          {sponsors.message.text}
        </p>
      </Textbox>
      <Cta href={`mailto:${email}`}>{sponsors.message.cta}</Cta>
      <A to="/kontakt">więcej opcji kontaktu</A>
    </Container>
  </Section>
);

Sponsors.propTypes = {
  sponsors: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    logos: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }).isRequired
    ).isRequired,
    message: PropTypes.shape({
      text: PropTypes.string.isRequired,
      cta: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};

export default Sponsors;
