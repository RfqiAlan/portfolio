"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

function ScrollShapes({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2 + state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = scrollProgress * Math.PI * 0.3;
      
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.2;
      groupRef.current.scale.setScalar(scale);
    }
  });

  const shapes = useMemo(() => [
    { position: [-3, 2, -2] as [number, number, number], color: "#6366f1", type: "icosahedron" },
    { position: [3, -1, -3] as [number, number, number], color: "#a855f7", type: "torus" },
    { position: [-2, -2, -1] as [number, number, number], color: "#ec4899", type: "octahedron" },
    { position: [2, 2, -2] as [number, number, number], color: "#06b6d4", type: "dodecahedron" },
    { position: [0, 0, -4] as [number, number, number], color: "#8b5cf6", type: "sphere" },
  ], []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={shape.position}>
            {shape.type === "icosahedron" && <icosahedronGeometry args={[0.8, 0]} />}
            {shape.type === "torus" && <torusGeometry args={[0.6, 0.25, 16, 32]} />}
            {shape.type === "octahedron" && <octahedronGeometry args={[0.7, 0]} />}
            {shape.type === "dodecahedron" && <dodecahedronGeometry args={[0.6, 0]} />}
            {shape.type === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
            {i % 2 === 0 ? (
              <MeshDistortMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                distort={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            ) : (
              <MeshWobbleMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                factor={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            )}
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ParticleField({ scrollProgress }: { scrollProgress: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 150;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = scrollProgress * Math.PI * 0.5;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#6366f1"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <ScrollShapes scrollProgress={scrollProgress} />
      <ParticleField scrollProgress={scrollProgress} />
    </>
  );
}

export function ScrollScene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30 dark:opacity-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
