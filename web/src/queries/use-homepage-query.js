import { graphql, useStaticQuery } from 'gatsby';

const useHomepageQuery = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      homeJson {
        hero {
          date
          message
          cta
          motto {
            childMarkdownRemark {
              html
            }
          }
        }
        signup {
          childMarkdownRemark {
            html
            frontmatter {
              cta
              href
            }
          }
        }
        location {
          childMarkdownRemark {
            html
          }
        }
        schedule {
          heading
          plan {
            time
            title
            description
          }
        }
        problem {
          childMarkdownRemark {
            frontmatter {
              heading
            }
            html
          }
        }
        solution {
          childMarkdownRemark {
            frontmatter {
              heading
            }
            html
          }
        }
        goal {
          childMarkdownRemark {
            frontmatter {
              heading
            }
            html
          }
        }
        prizes {
          childMarkdownRemark {
            frontmatter {
              heading
            }
            html
          }
        }
        patronage {
          honor {
            src
            alt
          }
          media {
            src
            alt
            href
          }
        }
        sponsors {
          heading
          logos {
            src
            alt
          }
          message {
            text
            cta
          }
        }
      }
    }
  `);

  return data.homeJson;
};

export default useHomepageQuery;
