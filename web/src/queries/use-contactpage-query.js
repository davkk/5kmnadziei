import { graphql, useStaticQuery } from 'gatsby';

const useContactpageQuery = () => {
  const data = useStaticQuery(graphql`
    query ContactpageQuery {
      contactJson {
        heading
        contacts {
          childMarkdownRemark {
            html
            frontmatter {
              name
              logo
            }
          }
        }
      }
    }
  `);

  return data.contactJson;
};

export default useContactpageQuery;
