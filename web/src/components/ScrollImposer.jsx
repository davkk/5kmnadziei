import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import css from '@emotion/css';

import { LIGHT_BLUE } from '@constants';

const ScrollImposer = props => (
  <AiOutlineDoubleRight
    {...props}
    css={css`
      position: absolute;
      bottom: -2em;
      left: 50%;
      z-index: -1;
      display: block;
      transform: translateX(-50%) rotate(90deg);
      font-size: 1.3em;
      color: ${LIGHT_BLUE};
    `}
  />
);

export default ScrollImposer;
