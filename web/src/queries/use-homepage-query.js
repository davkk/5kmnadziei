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
        _rawLocation
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
        schedule {
          isHidden
          summary {
            asset {
              url
            }
          }
          scheduleEntry {
            _rawInfo
            title
            time(formatString: "HH:mm")
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
      # homeJson {
      #   hero {
      #     date
      #     message
      #     cta
      #     motto {
      #       childMarkdownRemark {
      #         html
      #       }
      #     }
      #   }
      #   signup {
      #     childMarkdownRemark {
      #       html
      #       frontmatter {
      #         cta
      #         href
      #       }
      #     }
      #   }
      #   location {
      #     childMarkdownRemark {
      #       html
      #     }
      #   }
      #   schedule {
      #     heading
      #     plan {
      #       time
      #       title
      #       description
      #     }
      #   }
      #   problem {
      #     childMarkdownRemark {
      #       frontmatter {
      #         heading
      #       }
      #       html
      #     }
      #   }
      #   solution {
      #     childMarkdownRemark {
      #       frontmatter {
      #         heading
      #       }
      #       html
      #     }
      #   }
      #   goal {
      #     childMarkdownRemark {
      #       frontmatter {
      #         heading
      #       }
      #       html
      #     }
      #   }
      #   prizes {
      #     childMarkdownRemark {
      #       frontmatter {
      #         heading
      #       }
      #       html
      #     }
      #   }
      #   patronage {
      #     honor {
      #       src
      #       alt
      #     }
      #     media {
      #       src
      #       alt
      #       href
      #     }
      #   }
      #   sponsors {
      #     heading
      #     logos {
      #       src
      #       alt
      #     }
      #     message {
      #       text
      #       cta
      #     }
      #   }
      # }
    }
  `);

  return data.sanityHomePage;
};

export default useHomepageQuery;
