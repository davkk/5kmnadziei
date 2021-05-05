import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import { Section, Container, Subheading, Runner, A } from '@components/shared';
import { MEDIA } from '@helpers';
import {
  PURPLE_GRADIENT,
  TRANSITION,
  BORDER_RADIUS,
  MAIN_FONT,
} from '@constants';

const SubLink = A.withComponent('a');

const Hero = ({ hero }) => {
  const { message, eventDate, cta, href } = hero;

  return (
    <Section
      css={css`
        ${MEDIA.SDESKTOP`
          margin-bottom: 4em;
        `}
      `}
    >
      <Container>
        <Runner
          fill="#F8E9FA"
          css={css`
            display: inline-block;
            width: 16%;
            margin-bottom: -3.8em;

            ${MEDIA.SDESKTOP`
              margin-bottom: -2em;
            `}

            ${MEDIA.TABLET`
              width: 20%;
            `}

            ${MEDIA.LPHONE`
              display: none;
            `}
          `}
        />
        <Subheading
          css={css`
            color: #8a107e;
          `}
          dangerouslySetInnerHTML={{ __html: message }}
        />
        <h2
          css={css`
            color: #8a107e !important;
            font-family: 'Source Code Pro', monospace;
            font-size: 4em;
            font-weight: 700;
            line-height: 1.2;
            text-transform: uppercase;
            word-break: break-word;
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
        </h2>
        <a
          css={css`
            display: inline-block;
            padding: 0.9em 1.6em;
            border-radius: ${BORDER_RADIUS};
            ${PURPLE_GRADIENT};
            color: white;
            font-family: ${MAIN_FONT};
            font-size: 0.5em;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            transition: all ${TRANSITION}ms ease-in-out;

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
          `}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {cta}
        </a>
        <SubLink
          css={css`
            color: #750e6b;
          `}
          href="https://www.facebook.com/5kmnadziei"
        >
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
