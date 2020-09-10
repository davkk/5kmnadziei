import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Container,
  Row,
  Column,
  Heading,
  Textbox,
  Image,
} from '@components/shared';

const Prizes = ({ prizes }) => (
  <Section>
    <Container>
      <Heading
        align="right"
        dangerouslySetInnerHTML={{
          __html: prizes.childMarkdownRemark.frontmatter.heading,
        }}
      />
      <Row>
        <Column align="left">
          <Image width="90%" src="medal" alt="Medal" objectPosition="right" />
        </Column>
        <Column offset="5%" align="right">
          <Textbox
            dangerouslySetInnerHTML={{
              __html: prizes.childMarkdownRemark.html,
            }}
          />
        </Column>
      </Row>
    </Container>
  </Section>
);

Prizes.propTypes = {
  prizes: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        heading: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Prizes;
