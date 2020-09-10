import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';

import css from '@emotion/css';

import { GRAY_BLUE } from '@constants';
import {
  Section,
  Row,
  Column,
  Container,
  Heading,
  Subheading,
  Runner,
  Cta,
} from '@components/shared';
import { calculateTimeDifference, MEDIA } from '@helpers';

const Hero = ({ hero }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeDifference(hero.date));

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeDifference(hero.date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Section>
      <Container>
        <Subheading
          css={css`
            margin-bottom: 1em;
          `}
        >
          {hero.message}
        </Subheading>
        <Heading
          css={css`
            font-family: 'Source Code Pro', monospace;
            margin-bottom: 0.8em;

            ${MEDIA.TABLET`
              font-size: 2em;
            `}
            ${MEDIA.PHONE`
              font-size: 1.8em;
            `}
          `}
        >
          {timeLeft
            ? `${timeLeft.days}:${timeLeft.hours}:${timeLeft.mins}:${timeLeft.seconds}`
            : '00:00:00:00'}
        </Heading>
        <Subheading>4.04.2020</Subheading>
        <Scrollchor to="#plan" animate={{ offset: -30, duration: 500 }}>
          <Cta as="span">{hero.cta}</Cta>
        </Scrollchor>
        <Row
          css={css`
            margin-top: 4em;
          `}
        >
          <Column alignMiddle>
            <Runner
              fill={GRAY_BLUE}
              css={css`
                display: block;
                width: 50%;
              `}
            />
          </Column>
          <Column alignMiddle>
            <Subheading
              dangerouslySetInnerHTML={{
                __html: hero.motto.childMarkdownRemark.html,
              }}
            />
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

Hero.propTypes = {
  hero: PropTypes.shape({
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    motto: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Hero;
