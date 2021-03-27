import React, { useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import SideNavigation from "components/SideNavigation";

const IndexPage = () => {
  return (
    <Layout>
      <SideNavigation bgColor={true} />
      <main>some react vr planet image</main>
    </Layout>
  );
};

export default IndexPage;
