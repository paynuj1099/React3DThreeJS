import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { Group } from 'three';

// Preload before component renders
useGLTF.preload('/nike_tc_7900_sail.glb');

export default function ShoeModel() {
  const groupRef = useRef<Group>(null);
  
  // Load the GLB file
  const gltf = useGLTF('/nike_tc_7900_sail.glb');

  // Rotation animation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, .1, 0]} rotation={[0, Math.PI * 100 / 180, 0]} scale={1}>
      <primitive object={gltf.scene} />
    </group>
  );
}
