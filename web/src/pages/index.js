import React from 'react';

import { Layout } from '@layouts';
import {
  Hero,
  Schedule,
  Location,
  SignUp,
  Patronage,
  Sponsors,
} from '@components';
import { useHomepageQuery, useSiteMetadataQuery } from '@queries';

const Index = () => {
  const {
    _rawLocation,
    hero,
    patronage,
    sponsors,
    contactUs,
    schedule,
  } = useHomepageQuery();

  const { email } = useSiteMetadataQuery();

  return (
    <Layout>
      <Hero hero={hero} isScheduleHidden={schedule.isHidden} />
      <Patronage patronage={patronage} />
      <SignUp />
      <Sponsors sponsors={sponsors} email={email} contactUs={contactUs} />
      {!schedule.isHidden && (
        <>
          <Location location={_rawLocation} />
          <Schedule schedule={schedule} />
        </>
      )}
    </Layout>
  );
};

export default Index;
