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

const Goal = ({ goal }) => (
  <Section>
    <Container>
      <Heading
        align="left"
        dangerouslySetInnerHTML={{
          __html: goal.childMarkdownRemark.frontmatter.heading,
        }}
      />
      <Row>
        <Column align="left" offset="5%">
          <Textbox
            spaceBottom
            dangerouslySetInnerHTML={{
              __html: goal.childMarkdownRemark.html,
            }}
          />
        </Column>
        <Column align="right">
          <Image
            width="90%"
            src="idea-biegu"
            alt="Biegacze, Zdrowy styl życia"
          />
        </Column>
      </Row>
    </Container>
  </Section>
);

Goal.propTypes = {
  goal: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        heading: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Goal;
