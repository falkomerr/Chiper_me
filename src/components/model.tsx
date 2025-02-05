'use client';

import { useEffect, useRef } from 'react';
import { MathUtils, Mesh } from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Image from 'next/image';

export const Model = () => {
  return (
    <div className="!absolute top-0 z-30 !h-screen w-full max-w-[100vw] overflow-hidden">
      <Canvas className="!absolute top-0 z-50 max-w-[99vw]">
        <ambientLight intensity={3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <MeshComponent />
      </Canvas>
      <Image
        src="/background.svg"
        className="absolute right-1/2 bottom-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[87%] scale-[1.75]"
        alt="bg"
        height="700"
        width="700"
      />
    </div>
  );
};

const MeshComponent = () => {
  const fileUrl = '/moon.glb';
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useEffect(() => {
    let lastMouseX = 0;
    let lastMouseY = 0;
    const sensitivity = 0.003;
    const smoothingFactor = 0.07;

    function handleMouse(event: MouseEvent) {
      // Calculate relative mouse movements
      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;

      lastMouseX = event.clientX;
      lastMouseY = event.clientY;

      // Accumulate rotations
      targetRotation.y += deltaX * sensitivity;
      targetRotation.x += (deltaY * sensitivity) / 30; // Add X-axis rotation
    }

    let targetRotation = { x: 0, y: 0 }; // Track both X and Y rotations

    document.addEventListener('mousemove', handleMouse);

    const animate = () => {
      if (!mesh.current) return;

      mesh.current.rotation.y = MathUtils.lerp(
        mesh.current.rotation.y,
        targetRotation.y,
        smoothingFactor,
      );

      mesh.current.rotation.x = MathUtils.lerp(
        mesh.current.rotation.x,
        targetRotation.x,
        smoothingFactor,
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <mesh scale={[4, 4, 4]} position={[0, -4, 3]} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
