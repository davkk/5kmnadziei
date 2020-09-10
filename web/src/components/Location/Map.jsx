import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

const Map = ({ className }) => (
  <iframe
    defer
    className={className}
    title="Trasa biegu"
    src="https://www.google.com/maps/d/u/0/embed?mid=1M5mX8LxxOY4JMhS5hfVZTJlClMcr7Cvq&hl=pl&z=15"
  />
);

Map.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Map)`
  display: block;
  width: 85%;
  height: 22em;
  margin: 0 auto;
  padding: 1em;
  border-radius: 60px;

  ${MEDIA.SDESKTOP`
    height: 16em;
  `}
`;
