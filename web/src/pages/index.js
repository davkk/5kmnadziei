import React from 'react';

import { Layout } from '@layouts';
import { Hero, SignUp, Patronage, Sponsors } from '@components';
import { useHomepageQuery, useSiteMetadataQuery } from '@queries';

const Index = () => {
  const { hero, patronage, sponsors, contactUs } = useHomepageQuery();

  const { email } = useSiteMetadataQuery();

  return (
    <Layout>
      <Hero hero={hero} />
      <Patronage patronage={patronage} />
      <SignUp />
      <Sponsors sponsors={sponsors} email={email} contactUs={contactUs} />
    </Layout>
  );
};

export default Index;
