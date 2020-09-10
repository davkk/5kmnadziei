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

const Solution = ({ solution }) => (
  <Section>
    <Container>
      <Heading
        align="right"
        dangerouslySetInnerHTML={{
          __html: solution.childMarkdownRemark.frontmatter.heading,
        }}
      />
      <Row reverse>
        <Column offset="5%" align="right">
          <Textbox
            dangerouslySetInnerHTML={{
              __html: solution.childMarkdownRemark.html,
            }}
          />
        </Column>
        <Column align="left">
          <Image
            width="90%"
            src="pompa-infuzyjna"
            alt="Korytarz Hospicjum"
            objectPosition="right"
          />
        </Column>
      </Row>
    </Container>
  </Section>
);

Solution.propTypes = {
  solution: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        heading: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Solution;
