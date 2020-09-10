import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

const Parallax = ({ className, children, slideSpeed, reverse, horizontal }) => (
  <div
    className={className}
    style={{
      transform: horizontal
        ? `translate3d(${reverse ? -1 * slideSpeed : slideSpeed}px, 0, 0)`
        : `translate3d(0, ${reverse ? -1 * slideSpeed : slideSpeed}px, 0)`,
    }}
  >
    {children}
  </div>
);

Parallax.defaultProps = {
  reverse: false,
  horizontal: false,
};

Parallax.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  slideSpeed: PropTypes.number.isRequired,
  reverse: PropTypes.bool,
  horizontal: PropTypes.bool,
};

export default styled(Parallax)`
  ${MEDIA.SDESKTOP`
      transform: none !important;
  `};
`;
