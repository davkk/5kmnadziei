import { graphql, useStaticQuery } from 'gatsby';

const useContactpageQuery = () => {
  const data = useStaticQuery(graphql`
    query ContactpageQuery {
      sanityContactPage {
        organizers {
          name
          _rawInfo
          logo {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
        }
      }
    }
  `);

  return data.sanityContactPage;
};

export default useContactpageQuery;
