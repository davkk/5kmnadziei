import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import { Section, Container, Heading, Cta } from '@components/shared';

import Plan from './Plan';

const Schedule = ({ schedule }) => {
  const { scheduleEntry, summary } = schedule;

  const scheduleContainer = useRef(null);

  return (
    <Section id="plan">
      <Container ref={scheduleContainer}>
        <Heading>Plan biegu</Heading>
        {scheduleEntry.map((item, idx) => (
          <Plan
            key={shortid.generate()}
            time={item.time}
            title={item.title}
            description={item._rawInfo}
            reverse={!(idx % 2)}
          />
        ))}
        <Cta
          href={summary.asset.url}
          download="5kmnadziei-podsumowanie"
          target="_blank"
          rel="noreferrer noopener"
        >
          Pobierz podsumowanie planu
        </Cta>
      </Container>
    </Section>
  );
};

Schedule.propTypes = {
  schedule: PropTypes.shape({
    scheduleEntry: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        _rawInfo: PropTypes.array.isRequired,
      }).isRequired
    ).isRequired,
    summary: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Schedule;
