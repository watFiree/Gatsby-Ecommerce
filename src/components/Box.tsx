import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh position={[0.5, 0, 1]} ref={mesh}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};

export default Box;
