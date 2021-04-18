import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import SEO from "components/SEO";
import SideNavigation from "components/SideNavigation";
import Earth from "components/Earth";
import Box from "components/Box";

const IndexPage = () => (
  <div className="h-screen w-screen flex bg-index">
    <SEO />
    <SideNavigation bgColor={false} />
    <main className="w-4/5 h-screen flex items-center">
      <Canvas className="w-100 h-100">
        <spotLight intensity={0.4} position={[-1.3, 0.2, 5]} />
        <spotLight intensity={0.5} position={[-2, 0.2, 5.5]} />
        <spotLight intensity={0.6} position={[-7, 0.2, 6]} />
        <Suspense fallback={<Box />}>
          <Earth />
        </Suspense>
      </Canvas>
    </main>
  </div>
);

export default IndexPage;
