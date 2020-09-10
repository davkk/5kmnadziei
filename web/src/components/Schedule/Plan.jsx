import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { MEDIA } from '@helpers';
import { Row, Column, Textbox } from '@components/shared';
import { LIGHT_BLUE } from '@constants';

const Plan = ({ className, time, title, description, reverse }) => (
  <Row className={className} reverse={reverse}>
    <Column align={reverse ? 'left' : 'right'}>
      <time>{time}</time>
    </Column>
    <Column align={reverse ? 'right' : 'left'}>
      <h2>{title}</h2>
      <Textbox dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }} />
    </Column>
  </Row>
);

Plan.defaultProps = {
  reverse: false,
};

Plan.propTypes = {
  className: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default styled(Plan)`
  position: relative;
  margin-bottom: 3em;

  ${MEDIA.SDESKTOP`
    & ${Column}:first-of-type {
      margin-bottom: 1em;
    }
  `}

  & time {
    font-family: 'Source Code Pro', monospace;
    font-size: 3.5em;
    line-height: 1;
    font-weight: 700;
    color: ${LIGHT_BLUE};

    ${MEDIA.SDESKTOP`
      font-size: 2.5em;
    `}
  }

  & h2 {
    font-size: 1.1em;
    margin-bottom: 0.7em;
    text-transform: uppercase;
  }

  & ${Textbox} p {
    padding: 0;
    font-size: 0.9em;
  }
`;
