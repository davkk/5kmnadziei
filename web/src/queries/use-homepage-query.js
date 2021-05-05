import { graphql, useStaticQuery } from 'gatsby';

const useHomepageQuery = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      sanityHomePage {
        contactUs {
          cta
          text
        }
        hero {
          message
          eventDate(formatString: "DD.MM.YYYY")
          cta
          href
        }
        patronage {
          community {
            logo {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            text
          }
          honorary {
            logo {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            title
            website
          }
          media {
            title
            website
            logo {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        sponsors {
          website
          title
          logo {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  return data.sanityHomePage;
};

export default useHomepageQuery;
