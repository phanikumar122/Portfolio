"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Desktop: 100x100 = 10,000 points | Mobile: 60x60 = 3,600 points
const DESKTOP_GRID = 100;
const MOBILE_GRID = 60;
const GRID_SPACING = 0.6;

const createGridPositions = (gridSize: number) => {
  const count = gridSize * gridSize;
  const positions = new Float32Array(count * 3);
  let i = 0;
  const offset = (gridSize * GRID_SPACING) / 2;

  for (let ix = 0; ix < gridSize; ix++) {
    for (let iz = 0; iz < gridSize; iz++) {
      positions[i * 3]     = ix * GRID_SPACING - offset;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = iz * GRID_SPACING - offset;
      i++;
    }
  }
  return positions;
};

const DataOcean = ({ isMobile }: { isMobile: boolean }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const gridSize = isMobile ? MOBILE_GRID : DESKTOP_GRID;
  
  const particlesPosition = useMemo(
    () => createGridPositions(gridSize),
    [gridSize]
  );

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < gridSize; ix++) {
        for (let iz = 0; iz < gridSize; iz++) {
          const x = positions[i * 3];
          const z = positions[i * 3 + 2];

          // On mobile: simpler single-wave math to save GPU cycles
          if (isMobile) {
            const wave = Math.sin((x + z + time * 0.6) * 0.25) * 2.5;
            positions[i * 3 + 1] = wave - 5;
          } else {
            const wave1 = Math.sin((x + time * 0.8) * 0.3) * 1.5;
            const wave2 = Math.cos((z - time * 0.5) * 0.4) * 1.5;
            const wave3 = Math.sin((x + z + time) * 0.2) * 2;
            positions[i * 3 + 1] = (wave1 + wave2 + wave3) * 0.5 - 5;
          }

          i++;
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      // Gentle rotation on all devices
      pointsRef.current.rotation.y = time * 0.05;

      // Mouse parallax only on desktop (no touch events)
      if (!isMobile) {
        pointsRef.current.position.x = THREE.MathUtils.lerp(
          pointsRef.current.position.x, mouse.x * 2, 0.02
        );
        pointsRef.current.position.z = THREE.MathUtils.lerp(
          pointsRef.current.position.z, mouse.y * -2, 0.02
        );
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.1 : 0.08}
        color="#ffffff"
        transparent
        opacity={isMobile ? 0.25 : 0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const ParticleField = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    check();
    const mq = window.matchMedia("(pointer: coarse)");
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 40%, #09090b 100%)",
        }}
      />

      <Canvas
        // Mobile: cap at 1x DPR to halve pixel fill rate. Desktop: up to 1.5x.
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        camera={{ position: [0, 4, 15], fov: 75 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={["#09090b", 15, 50]} />
        <DataOcean isMobile={isMobile} />
      </Canvas>
    </div>
  );
};
