import React from 'react';

import css from '@emotion/css';

import { Layout } from '@layouts';
import { Section, Container, Heading, Textbox, A } from '@components/shared';
import { useRulespageQuery } from '@queries';

const Rules = () => {
  const { heading, rules } = useRulespageQuery();

  return (
    <Layout
      pageTitle="Regulamin biegu"
      siteDescription="Postanowienia, najważniejsze zasady i wymagania obowiązujące na Biegu 5 KM NADZIEI"
    >
      <Section>
        <Container
          css={css`
            padding: 2em 0 3em;
          `}
        >
          <Heading dangerouslySetInnerHTML={{ __html: heading }} />
          <Textbox
            css={css`
              text-align: left;
              p {
                font-size: 0.8em;
              }
            `}
            dangerouslySetInnerHTML={{ __html: rules.childMarkdownRemark.html }}
          />
          <A to="/">powrót na stronę główną</A>
        </Container>
      </Section>
    </Layout>
  );
};

export default Rules;
