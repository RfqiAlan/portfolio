"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const smallSpheres = useMemo(() => {
    const items = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 1.8;
      items.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.5,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        color: i % 2 === 0 ? "#818cf8" : "#ec4899",
        scale: 0.15 + Math.random() * 0.1,
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Main central shape */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#818cf8"
            transparent
            opacity={0.8}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting small spheres */}
      {smallSpheres.map((sphere, i) => (
        <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.3}>
          <mesh position={sphere.position} scale={sphere.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              transparent
              opacity={0.7}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}

      {/* Wireframe ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 64]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export function SkillsScene() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ec4899" />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
