import { graphql, useStaticQuery } from 'gatsby';

const useRulespageQuery = () => {
  const data = useStaticQuery(graphql`
    query RulespageQuery {
      rulesJson {
        heading
        rules {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return data.rulesJson;
};

export default useRulespageQuery;
