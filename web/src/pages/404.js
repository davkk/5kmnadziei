import React from 'react';
import { FaRegFrownOpen } from 'react-icons/fa';

import css from '@emotion/css';

import { Layout } from '@layouts';
import {
  Section,
  Container,
  Heading,
  Subheading,
  Cta,
} from '@components/shared';

const NotFound = () => (
  <Layout pageTitle="Nie znaleziono">
    <Section>
      <Container
        css={css`
          padding: 2em 0 4em;
        `}
      >
        <Heading
          css={css`
            margin-bottom: 0.3em;
            font-size: 5em;
          `}
        >
          <FaRegFrownOpen
            css={css`
              display: block;
              margin: 0 auto;
            `}
          />
        </Heading>
        <Subheading
          css={css`
            margin-bottom: 1em;
          `}
        >
          Strona, której szukasz nie istnieje!
        </Subheading>
        <Cta href="/">powrót na stronę główną</Cta>
      </Container>
    </Section>
  </Layout>
);

export default NotFound;
