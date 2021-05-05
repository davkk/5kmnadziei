import React from 'react';

import css from '@emotion/css';

import { useGlobalsQuery } from '@queries';
import { Section, Container, Textbox, Cta } from '@components/shared';
import { PURPLE_GRADIENT } from '@constants';

const SignUp = () => {
  const { signUp } = useGlobalsQuery();
  const { cta, href, _rawMessage } = signUp;

  return (
    <Section
      css={css`
        margin: 0;
      `}
      background={PURPLE_GRADIENT}
    >
      <Container
        css={css`
          padding: 3em 0;
        `}
      >
        <Textbox
          css={css`
            color: white;
            font-size: 0.9em;

            & p strong {
              color: white;
            }
          `}
          blocks={_rawMessage}
        />
        <Cta
          href={href}
          target="_BLANK"
          white
          css={css`
            color: #8a107e;
          `}
        >
          {cta}
        </Cta>
      </Container>
    </Section>
  );
};

export default SignUp;
