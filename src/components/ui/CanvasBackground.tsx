"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const CanvasBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Setup Particles
    const particleCount = 90;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    // Randomize initial positions & velocities
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 360;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 260;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      velocities.push(
        (Math.random() - 0.5) * 0.35,
        (Math.random() - 0.5) * 0.35,
        (Math.random() - 0.5) * 0.35
      );
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle texture - create circle canvas
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 3.5,
      map: texture,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 3. Dynamic Lines Setup
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const maxConnections = 400;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Cache container dimensions to prevent layout thrashing
    let rectWidth = container.clientWidth;
    let rectHeight = container.clientHeight;
    let rectLeft = container.getBoundingClientRect().left;
    let rectTop = container.getBoundingClientRect().top;

    // 4. Mouse Move Event
    const handleMouseMove = (e: MouseEvent) => {
      const x = ((e.clientX - rectLeft) / rectWidth) * 2 - 1;
      const y = -((e.clientY - rectTop) / rectHeight) * 2 + 1;
      
      mouseRef.current.targetX = x * 160;
      mouseRef.current.targetY = y * 110;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Resize Event
    const handleResize = () => {
      if (!container) return;
      rectWidth = container.clientWidth;
      rectHeight = container.clientHeight;
      const rect = container.getBoundingClientRect();
      rectLeft = rect.left;
      rectTop = rect.top;

      camera.aspect = rectWidth / rectHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(rectWidth, rectHeight);
    };

    window.addEventListener("resize", handleResize);

    // 6. Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Mouse position interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const posArr = geometry.attributes.position.array as Float32Array;
      const linePositionsAttr = lineGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        // Update positions
        posArr[i * 3] += velocities[i * 3];
        posArr[i * 3 + 1] += velocities[i * 3 + 1];
        posArr[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary checks
        if (Math.abs(posArr[i * 3]) > 180) velocities[i * 3] *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 130) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 80) velocities[i * 3 + 2] *= -1;

        // Mouse attraction
        const dx = mouseRef.current.x - posArr[i * 3];
        const dy = mouseRef.current.y - posArr[i * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          posArr[i * 3] += dx * 0.0018;
          posArr[i * 3 + 1] += dy * 0.0018;
        }

        // Lines segments connections
        for (let j = i + 1; j < particleCount; j++) {
          const dxLine = posArr[i * 3] - posArr[j * 3];
          const dyLine = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dzLine = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const distLine = Math.sqrt(dxLine * dxLine + dyLine * dyLine + dzLine * dzLine);

          if (distLine < 60 && lineIndex < maxConnections) {
            const idx = lineIndex * 6;
            linePositionsAttr[idx] = posArr[i * 3];
            linePositionsAttr[idx + 1] = posArr[i * 3 + 1];
            linePositionsAttr[idx + 2] = posArr[i * 3 + 2];
            
            linePositionsAttr[idx + 3] = posArr[j * 3];
            linePositionsAttr[idx + 4] = posArr[j * 3 + 1];
            linePositionsAttr[idx + 5] = posArr[j * 3 + 2];
            
            lineIndex++;
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);

      // Slow rotational drift
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0002;
      lineMesh.rotation.y += 0.0005;
      lineMesh.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] pointer-events-none w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};
