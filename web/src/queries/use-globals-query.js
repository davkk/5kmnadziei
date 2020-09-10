import { graphql, useStaticQuery } from 'gatsby';

const useGlobalsQuery = () => {
  const data = useStaticQuery(graphql`
    query GlobalsQuery {
      contentJson {
        donate {
          heading
          text
          cta
          href
        }
        copyright
      }
    }
  `);

  return data.contentJson;
};

export default useGlobalsQuery;
