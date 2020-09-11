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
import { MEDIA } from '@helpers';

const Contact = () => {
  const { organizers } = useContactpageQuery();

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
          {organizers.map(contact => (
            <Row
              key={shortid.generate()}
              css={css`
                margin-bottom: 4em;
              `}
            >
              <Column>
                <Image
                  fluid={contact.logo.asset.fluid}
                  alt={contact.logo.alt}
                  objectFit="contain"
                  css={css`
                    display: inline-block;
                    width: 80%;
                    min-height: auto;
                    box-shadow: none;
                    border-radius: 0;

                    ${MEDIA.SDESKTOP`
                      width: 57%;
                    `}
                  `}
                />
              </Column>
              <Column align="left">
                <Subheading
                  align="left"
                  dangerouslySetInnerHTML={{
                    __html: contact.name,
                  }}
                />
                <Textbox
                  css={css`
                    word-break: break-all;
                    line-height: 1;
                  `}
                  blocks={contact._rawInfo}
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
