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

const Problem = ({ problem }) => (
  <Section>
    <Container>
      <Heading
        align="left"
        dangerouslySetInnerHTML={{
          __html: problem.childMarkdownRemark.frontmatter.heading,
        }}
      />
      <Row>
        <Column align="left" offset="5%">
          <Textbox
            dangerouslySetInnerHTML={{
              __html: problem.childMarkdownRemark.html,
            }}
          />
        </Column>
        <Column align="right">
          <Image width="90%" src="problem2" alt="Korytarz Hospicjum" />
        </Column>
      </Row>
    </Container>
  </Section>
);

Problem.propTypes = {
  problem: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        heading: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Problem;
