import React from 'react';

import { Link } from 'gatsby';

import css from '@emotion/css';

import { MEDIA } from '@helpers';
import logo from '@images/logo.svg';

const Logo = () => (
  <Link
    to="/"
    css={css`
      display: block;
    `}
  >
    <img
      src={logo}
      alt="5 KM NADZIEI"
      css={css`
        display: block;
        max-width: 60%;
        height: auto;
        margin: 0 auto;

        ${MEDIA.TABLET`
    max-width: 80%;
  `}

        ${MEDIA.PHONE`
    max-width: 100%;
  `}
      `}
    />
  </Link>
);

export default Logo;
