import React from 'react';

import css from '@emotion/css';

import { useGlobalsQuery } from '@queries';
import {
  Section,
  Container,
  Row,
  Column,
  Textbox,
  Runner,
  Cta,
} from '@components/shared';
import { BLUE_GRADIENT } from '@constants';
import { MEDIA } from '@helpers';

const SignUp = () => {
  const { signUp } = useGlobalsQuery();
  const { cta, href, _rawMessage } = signUp;

  return (
    <Section background={BLUE_GRADIENT}>
      <Container
        css={css`
          padding: 3em 0;
        `}
      >
        <Row
          css={css`
            ${MEDIA.SDESKTOP`
              flex-direction: column-reverse;
            `}
          `}
        >
          <Column
            alignMiddle
            css={css`
              ${MEDIA.SDESKTOP`
                margin: 2em 0 0 !important;
              `}
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
            <Cta href={href} target="_BLANK" white>
              {cta}
            </Cta>
          </Column>
          <Column alignMiddle>
            <Runner
              css={css`
                width: 40%;

                ${MEDIA.SDESKTOP`
                  width: 30%;
                `}

                ${MEDIA.PHONE`
                  width: 50%;
                `}
              `}
            />
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default SignUp;
