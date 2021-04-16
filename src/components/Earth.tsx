import React, { Suspense, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import Box from "./Box";
import earthImg from "images/earth.jpg";
import earthBumpImg from "images/earthBump.jpg";
import cloudsImg from "images/clouds.jpg";
import cloudsAlphaImg from "images/cloudsAlpha.jpg";

const Earth = () => {
  const earth = React.useRef<THREE.Mesh>();
  const clouds = React.useRef<THREE.Mesh>();
  const [hovered, setHover] = useState(false);
  const [
    earthMap,
    earthBumpMap,
    cloudsMap,
    cloudsAlpha,
  ] = useLoader(TextureLoader, [
    earthImg,
    earthBumpImg,
    cloudsImg,
    cloudsAlphaImg,
  ]);

  useFrame(() => {
    if (earth.current) {
      earth.current.rotation.y += hovered ? 0.0015 : 0.002;
    }
    if (clouds.current) {
      clouds.current.rotation.y += hovered ? 0.0018 : 0.0022;
    }
  });

  return (
    <group>
      <mesh
        position={[0.5, 0, 3]}
        ref={earth}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereBufferGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial
          attach="material"
          map={earthMap}
          bumpMap={earthBumpMap}
          bumpScale={0.011}
        />
      </mesh>
      <mesh
        ref={clouds}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[0.5, 0, 3]}
      >
        <sphereBufferGeometry args={[0.805, 128, 128]} />
        <meshStandardMaterial map={cloudsMap} attach="material" />
        <meshStandardMaterial
          alphaMap={cloudsAlpha}
          transparent
          opacity={0.85}
          attach="material"
        />
      </mesh>
    </group>
  );
};

export default Earth;
