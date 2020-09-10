import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const Copyright = ({ className, msg }) => (
  <small className={className}>
    {new Date().getFullYear()} &copy; {msg}
  </small>
);

Copyright.propTypes = {
  className: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default styled(Copyright)`
  display: block;
  margin-top: 4em;
  font-size: 0.5em;
  color: ${GRAY_BLUE};

  ${MEDIA.SDESKTOP`
    margin-top: 7em;
  `}
`;
