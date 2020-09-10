import React from 'react';

import { Layout } from '@layouts';
import {
  Hero,
  Schedule,
  Location,
  SignUp,
  Problem,
  Solution,
  Goal,
  Prizes,
  Patronage,
  Sponsors,
} from '@components';
import { useHomepageQuery, useSiteMetadataQuery } from '@queries';

const Index = () => {
  const {
    hero,
    schedule,
    location,
    problem,
    solution,
    goal,
    prizes,
    patronage,
    sponsors,
  } = useHomepageQuery();

  const { email } = useSiteMetadataQuery();

  return (
    <Layout>
      <Hero hero={hero} />
      <Patronage patronage={patronage} />
      <Location location={location.childMarkdownRemark.html} />
      <Schedule schedule={schedule} />
      <SignUp />
      <Problem problem={problem} />
      <Solution solution={solution} />
      <Goal goal={goal} />
      <SignUp />
      <Prizes prizes={prizes} />
      <Sponsors sponsors={sponsors} email={email} />
    </Layout>
  );
};

export default Index;
