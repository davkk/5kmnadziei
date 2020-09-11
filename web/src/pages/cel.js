import React from 'react';

import shortid from 'shortid';

import css from '@emotion/css';

import { Layout } from '@layouts';
import {
  Section,
  Container,
  Row,
  Column,
  Textbox,
  Image,
} from '@components/shared';
import { useGoalpageQuery } from '@queries';
import { GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const GoalPage = () => {
  const { goalEntries } = useGoalpageQuery();

  return (
    <Layout pageTitle="Cel biegu">
      {goalEntries.map((item, idx) => (
        <Section
          key={shortid.generate()}
          css={css`
            margin-top: 7em;
            margin-bottom: 12em;

            &:first-of-type {
              ${MEDIA.TABLET`
                margin-top: 4.5em;
              `}
            }
          `}
        >
          <Container>
            <Row reverse={idx % 2}>
              <Column
                align="left"
                css={css`
                  position: relative;
                `}
              >
                <h2
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                  css={css`
                    color: ${GRAY_BLUE};
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 5em;
                    width: 100%;
                    display: block;
                    text-align: center;
                    line-height: 1;
                    position: absolute;
                    top: -33%;
                    left: 50%;
                    z-index: -1;
                    transform: translateX(-50%);

                    ${MEDIA.LDESKTOP`
                      font-size: 4em;
                      top: -25%;
                    `}

                    ${MEDIA.SDESKTOP`
                      top: auto;
                      bottom: 105%;
                    `}

                    ${MEDIA.TABLET`
                      font-size: 3em;
                    `}

                    ${MEDIA.LPHONE`
                      font-size: 2em;
                    `}
                  `}
                />
                <Textbox
                  blocks={item._rawText}
                  css={css`
                    padding: 1em;
                    text-align: center;
                  `}
                />
              </Column>
              <Column align="right">
                <Image fluid={item.image.asset.fluid} alt={item.image.alt} />
              </Column>
            </Row>
          </Container>
        </Section>
      ))}
    </Layout>
  );
};

export default GoalPage;
