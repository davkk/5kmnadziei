import { graphql, useStaticQuery } from 'gatsby';

const useGoalpageQuery = () => {
  const data = useStaticQuery(graphql`
    query GoalpageQuery {
      sanityGoalPage {
        goalEntries {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
          _rawText
          title
        }
      }
    }
  `);

  return data.sanityGoalPage;
};

export default useGoalpageQuery;
