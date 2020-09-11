import { graphql, useStaticQuery } from 'gatsby';

const useGlobalsQuery = () => {
  const data = useStaticQuery(graphql`
    query GlobalsQuery {
      sanityGlobal {
        copyright
        signUp {
          cta
          href
          _rawMessage
        }
        donateMessage {
          title
          cta
          href
          _rawText
        }
      }
    }
  `);

  return data.sanityGlobal;
};

export default useGlobalsQuery;
