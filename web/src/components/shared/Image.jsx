import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image/withIEPolyfill';

import styled from '@emotion/styled';

import { BORDER_RADIUS, GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const Image = ({ className, fluid, alt, ...props }) => (
  <Img
    className={className}
    alt={alt}
    fluid={fluid}
    objectFit="cover"
    objectPosition="50% 50%"
    {...props}
  />
);

Image.propTypes = {
  className: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
};

export default styled(Image)`
  display: block;
  min-height: 20em;
  max-height: 16em;
  border-radius: ${BORDER_RADIUS};
  box-shadow: -20px 20px 0 ${GRAY_BLUE};

  ${MEDIA.SDESKTOP`
    min-height: auto;
  `}
`;
