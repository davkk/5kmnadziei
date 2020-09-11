import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import { Textbox, Cta } from '@components/shared';

const Donate = ({ donate }) => (
  <div
    css={css`
      color: white;
    `}
  >
    <h2
      css={css`
        text-transform: uppercase;
        font-size: 0.7em;
        margin-bottom: 0.7em !important;
      `}
      dangerouslySetInnerHTML={{ __html: donate.title }}
    />
    <Textbox
      spaceBottom
      css={css`
        color: white;

        p {
          font-size: 0.6em;
          font-weight: 400;
        }
      `}
      blocks={donate._rawText}
    />
    <Cta href={donate.href} target="_BLANK" white>
      {donate.cta}
    </Cta>
  </div>
);

Donate.propTypes = {
  donate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _rawText: PropTypes.array.isRequired,
    cta: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};

export default Donate;
