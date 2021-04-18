import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO: React.FC<{ title?: string; lang?: string }> = ({
  title,
  lang = "en",
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      meta={[
        { name: "description", content: site.siteMetadata.description },
        { name: "author", content: site.siteMetadata.author },
      ]}
    />
  );
};

export default SEO;
