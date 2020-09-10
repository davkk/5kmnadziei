import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import {
  Section,
  Container,
  Row,
  Column,
  Subheading,
  ImageList,
} from '@components/shared';
import { GRAY_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const Patronage = ({ patronage }) => (
  <Section
    css={css`
      margin-bottom: 0;
      background: ${GRAY_BLUE};
      padding: 3.5em 0;
    `}
  >
    <Container>
      <Row>
        <Column>
          <Subheading>Patronat Honorowy</Subheading>
          <ImageList items={patronage.honor} numInRow={2} />
        </Column>
        <Column>
          <Subheading>Patronat Medialny</Subheading>
          <ImageList items={patronage.media} numInRow={3} />
        </Column>
      </Row>
      <Subheading
        css={css`
          margin-top: 4em;

          ${MEDIA.MIN_SDESKTOP`
            max-width: 70%;
            margin-left: auto;
            margin-right: auto;
          `}
        `}
      >
        Zadanie publiczne jest współ&shy;finansowane przy&nbsp;współudziale
        Gminy&nbsp;Olsztyn
      </Subheading>
      <ImageList
        items={[{ src: 'gmina-olsztyn', alt: 'Gmina Olsztyn' }]}
        numInRow={1}
      />
    </Container>
  </Section>
);

Patronage.propTypes = {
  patronage: PropTypes.shape({
    honor: PropTypes.array.isRequired,
    media: PropTypes.array.isRequired,
    section: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        frontmatter: PropTypes.shape({
          heading: PropTypes.string.isRequired,
        }).isRequired,
        html: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default Patronage;
