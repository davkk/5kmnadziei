import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import { Textbox, Cta } from '@components/shared';

const Donate = ({ donate }) => (
  <div>
    <Textbox
      spaceBottom
      css={css`
        color: white;

        p {
          font-size: 0.6em;
          font-weight: 400;
        }
      `}
    >
      <h2
        css={css`
          text-transform: uppercase;
          font-size: 0.7em;
          margin-bottom: 0.7em !important;
        `}
        dangerouslySetInnerHTML={{ __html: donate.heading }}
      />
      <p dangerouslySetInnerHTML={{ __html: donate.text }} />
    </Textbox>
    <Cta href={donate.href} target="_BLANK" white>
      {donate.cta}
    </Cta>
  </div>
);

Donate.propTypes = {
  donate: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

export default Donate;
