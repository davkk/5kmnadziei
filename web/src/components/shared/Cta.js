import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import css from '@emotion/css';

import { MEDIA } from '@helpers';

import {
  DARK_BLUE,
  BLUE_GRADIENT,
  MAIN_FONT,
  BORDER_RADIUS,
  TRANSITION,
} from '@constants';

const Cta = styled.a`
  display: inline-block;
  padding: 0.9em 1.6em;
  border-radius: ${BORDER_RADIUS};
  ${({ white }) => (white ? 'background: white' : BLUE_GRADIENT)};
  color: ${({ white }) => (white ? DARK_BLUE : 'white')};
  font-family: ${MAIN_FONT};
  font-size: 0.5em;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: all ${TRANSITION}ms ease-in-out;
  ${({ outline }) =>
    outline &&
    css`
      background: white;
      border: 2px solid ${DARK_BLUE};
      color: ${DARK_BLUE};
    `}

  &:hover,
  &:focus {
    background-position: 100% 100%;
    transform: scale(1.05);
  }

  ${MEDIA.LDESKTOP`
    padding: 0.8em 1.4em;
  `}

  ${MEDIA.PHONE`
    padding: 0.9em 1.1em;
  `}
`;

Cta.defaultProps = {
  white: false,
};

Cta.propTypes = {
  white: PropTypes.bool,
};

export default Cta;
