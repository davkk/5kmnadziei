import React from 'react';
import PropTypes from 'prop-types';
// import Scrollchor from 'react-scrollchor';

import css from '@emotion/css';

import { GRAY_BLUE } from '@constants';
import {
  Section,
  Container,
  Heading,
  Subheading,
  Runner,
  Cta,
  A,
} from '@components/shared';
import { MEDIA } from '@helpers';

const SubLink = A.withComponent('a');

const Hero = ({ hero }) => {
  const { message, eventDate, cta, href } = hero;

  return (
    <Section>
      <Container>
        <Runner
          fill={GRAY_BLUE}
          css={css`
            display: inline-block;
            width: 16%;
            margin-bottom: -3.8em;
          `}
        />
        <Subheading dangerouslySetInnerHTML={{ __html: message }} />
        <Heading
          css={css`
            font-family: 'Source Code Pro', monospace;
            font-size: 4em;
            margin-bottom: 0.5em;
            word-break: keep-all;

            ${MEDIA.SDESKTOP`
              font-size: 3em;
            `}

            ${MEDIA.LPHONE`
              font-size: 2em;
            `}
          `}
        >
          {eventDate}
        </Heading>
        <Cta href={href} target="_blank" rel="noreferrer noopener">
          {cta}
        </Cta>
        <SubLink href="https://www.facebook.com/5kmnadziei">
          wszystkie aktualności
        </SubLink>
        {/* <Scrollchor to="#plan" animate={{ offset: -30, duration: 500 }}>
          <Cta as="span">{cta}</Cta>
        </Scrollchor> */}
      </Container>
    </Section>
  );
};

Hero.propTypes = {
  hero: PropTypes.shape({
    eventDate: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
