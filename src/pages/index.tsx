import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Layout from "components/Layout";
import SideNavigation from "components/SideNavigation";
import Earth from "components/Earth";

const IndexPage = () => (
  <Layout background="index">
    <SideNavigation bgColor={false} />

    <Suspense fallback={() => <h1>Loading ...</h1>}>
      <main className="w-4/5 h-screen flex items-center">
        <Canvas className="w-100 h-100">
          <Earth />
        </Canvas>
      </main>
    </Suspense>
  </Layout>
);

export default IndexPage;
