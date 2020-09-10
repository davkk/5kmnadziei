import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image/withIEPolyfill';

import styled from '@emotion/styled';

import { BORDER_RADIUS, GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';
import { useCloudinaryQuery } from '@queries';

const Image = ({ className, src, alt, ...props }) => {
  const images = useCloudinaryQuery();

  const image = images.filter(node => node.public_id.includes(src))[0];

  if (!image) {
    return null;
  }

  return (
    <Img
      className={className}
      alt={alt}
      sizes={{
        ...image.image.childImageSharp.fluid,
        aspectRatio: 55 / 34,
      }}
      objectFit="cover"
      objectPosition="50% 50%"
      {...props}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default styled(Image)`
  display: inline-block;
  width: ${({ width }) => width || '100%'};
  min-height: 20em;
  border-radius: ${BORDER_RADIUS};
  box-shadow: -20px 20px 0 ${GRAY_BLUE};

  ${MEDIA.SDESKTOP`
    min-height: auto;
    max-height: 15em;
  `}
`;
