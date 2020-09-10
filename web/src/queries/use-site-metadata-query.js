import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          backgroundColor
          siteDescription
          siteTitle
          siteTitleShort
          siteUrl
          social {
            fbAppId
          }
          themeColor
          email
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadataQuery;
