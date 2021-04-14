import React, { useState, Suspense } from "react";
import { useFrame, useLoader, MeshProps } from "@react-three/fiber";
import { TextureLoader } from "three";
import earthImg from "images/earth.jpg";
import earthBumpImg from "images/earthBump.jpg";

const Earth = () => {
  const earth = React.useRef<THREE.Mesh>();
  const clouds = React.useRef<THREE.Mesh>();
  const [hovered, setHover] = useState(false);
  const cloudsImages = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmap.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg",
  ];
  const [
    earthMap,
    earthBumpMap,
    cloudsMap,
    cloudsAlpha,
  ] = useLoader(TextureLoader, [
    earthImg,
    earthBumpImg,
    cloudsImages[0],
    cloudsImages[1],
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
    <Suspense fallback={null}>
      <spotLight intensity={0.4} position={[-1.3, 0.2, 5]} />
      <spotLight intensity={0.5} position={[-2, 0.2, 5.5]} />
      <spotLight intensity={0.6} position={[-7, 0.2, 6]} />

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
    </Suspense>
  );
};

export default Earth;
