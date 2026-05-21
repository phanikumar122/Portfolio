"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const createParticlePositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const seed1 = i * 1.1;
    const seed2 = i * 2.2;
    const seed3 = i * 3.3;
    positions[i * 3] = (pseudoRandom(seed1) - 0.5) * 10;
    positions[i * 3 + 1] = (pseudoRandom(seed2) - 0.5) * 10;
    positions[i * 3 + 2] = (pseudoRandom(seed3) - 0.5) * 10;
  }
  return positions;
};

const Particles = ({ count = 5000 }) => {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => createParticlePositions(count), [count]);

  useFrame((state) => {
    const { mouse } = state;
    if (points.current) {
      points.current.rotation.x += 0.001;
      points.current.rotation.y += 0.001;
      
      // Subtle reaction to mouse
      points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.5, 0.05);
      points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.5, 0.05);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        alphaTest={0.5}
        opacity={0.6}
      />
    </points>
  );
};

export const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#0a0a0f"]} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};
