import React from 'react';
import PropTypes from 'prop-types';

import css from '@emotion/css';

import {
  Section,
  Container,
  Row,
  Column,
  Subheading,
  Image,
  ImageList,
} from '@components/shared';
import { MEDIA } from '@helpers';

const Patronage = ({ patronage }) => {
  const { community, honorary, media } = patronage;

  return (
    <Section
      css={css`
        padding: 4em 0;
      `}
    >
      <Container>
        <Row>
          <Column>
            <Subheading>Patronat Honorowy</Subheading>
            <ImageList items={honorary} numinrow={2} />
          </Column>
          <Column>
            <Subheading>Patronat Medialny</Subheading>
            <ImageList items={media} numinrow={3} />
          </Column>
        </Row>
        <Subheading
          css={css`
            margin-top: 1.5em;

            ${MEDIA.MIN_SDESKTOP`
              max-width: 70%;
              margin-left: auto;
              margin-right: auto;
            `}
          `}
          dangerouslySetInnerHTML={{ __html: community.text }}
        />
        <Image
          fluid={community.logo.asset.fluid}
          alt={community.logo.alt}
          objectFit="contain"
          css={css`
            margin: 1.7em auto 0;
            min-height: auto;
            width: 25%;
            border-radius: 0;
            box-shadow: none;

            ${MEDIA.SDESKTOP`
              width: 45%;
            `}
          `}
        />
      </Container>
    </Section>
  );
};

Patronage.propTypes = {
  patronage: PropTypes.shape({
    honorary: PropTypes.array.isRequired,
    media: PropTypes.array.isRequired,
    community: PropTypes.object.isRequired,
  }).isRequired,
};

export default Patronage;
