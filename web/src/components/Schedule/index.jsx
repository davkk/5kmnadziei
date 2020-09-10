import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import { Section, Container, Heading, Cta } from '@components/shared';

import Plan from './Plan';
import runSummary from '@images/5kmnadziei-podsumowanie.jpg';

const Schedule = ({ schedule }) => {
  const scheduleContainer = useRef(null);

  return (
    <Section id="plan">
      <Container ref={scheduleContainer}>
        <Heading>Plan biegu</Heading>
        {schedule.plan.map((item, idx) => (
          <Plan
            key={shortid.generate()}
            time={item.time}
            title={item.title}
            description={item.description}
            reverse={!(idx % 2)}
          />
        ))}
        <Cta href={runSummary} download>
          Pobierz podsumowanie planu
        </Cta>
      </Container>
    </Section>
  );
};

Schedule.propTypes = {
  schedule: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    plan: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Schedule;
