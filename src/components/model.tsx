'use client';

import { useEffect, useRef } from 'react';
import { MathUtils, Mesh } from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Image from 'next/image';

export const Model = () => {
  return (
    <div className="!absolute top-0 z-30 !h-screen w-screen">
      <Canvas className="!absolute top-0 z-50">
        <ambientLight intensity={10} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <MeshComponent />
      </Canvas>
      <Image
        src="/background.svg"
        className="absolute right-1/2 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[50%]"
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
    let lastMouseY = 0; // Track vertical mouse movement
    const sensitivity = 0.002;
    const smoothingFactor = 0.05;

    function handleMouse(event: MouseEvent) {
      // Calculate relative mouse movements
      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;

      lastMouseX = event.clientX;
      lastMouseY = event.clientY;

      // Accumulate rotations
      targetRotation.x += deltaY * sensitivity;
      targetRotation.y += deltaX * sensitivity;
    }

    let targetRotation = { x: 0, y: 0 }; // Track both rotations

    document.addEventListener('mousemove', handleMouse);

    // Animation loop for smooth interpolation
    const animate = () => {
      if (!mesh.current) return;

      // // Smoothly interpolate towards target rotation
      // mesh.current.rotation.x = MathUtils.lerp(
      //   mesh.current.rotation.x,
      //   targetRotation.x,
      //   smoothingFactor,
      // );
      mesh.current.rotation.y = MathUtils.lerp(
        mesh.current.rotation.y,
        targetRotation.y,
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
