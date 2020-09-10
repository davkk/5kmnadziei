import React from 'react';

import shortid from 'shortid';

import css from '@emotion/css';

import { Layout } from '@layouts';
import {
  Section,
  Container,
  Row,
  Column,
  Heading,
  Subheading,
  Textbox,
  A,
  Image,
} from '@components/shared';
import { useContactpageQuery } from '@queries';

const Contact = () => {
  const { contacts } = useContactpageQuery();

  return (
    <Layout
      pageTitle="Kontakt"
      siteDescription="Informacje kontaktowe organizatorów Biegu 5 KM NADZIEI - Centrum Opieki Paliatywnej im. Jana Pawła II oraz Stowarzyszenie Leśny Cross"
    >
      <Section>
        <Container
          css={css`
            padding: 2em 0 3em;
          `}
        >
          <Heading>Kon&shy;takt</Heading>
          {contacts.map(contact => (
            <Row
              key={shortid.generate()}
              css={css`
                margin-bottom: 4em;
              `}
            >
              <Column>
                <Image
                  src={contact.childMarkdownRemark.frontmatter.logo}
                  alt={contact.childMarkdownRemark.frontmatter.name}
                  width="80%"
                  objectFit="contain"
                  css={css`
                    min-height: auto;
                    box-shadow: none;
                    border-radius: 0;
                  `}
                />
              </Column>
              <Column align="left">
                <Subheading
                  align="left"
                  dangerouslySetInnerHTML={{
                    __html: contact.childMarkdownRemark.frontmatter.name,
                  }}
                />
                <Textbox
                  dangerouslySetInnerHTML={{
                    __html: contact.childMarkdownRemark.html,
                  }}
                />
              </Column>
            </Row>
          ))}
          <A to="/">powrót na stronę główną</A>
        </Container>
      </Section>
    </Layout>
  );
};

export default Contact;
