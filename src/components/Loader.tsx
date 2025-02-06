'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Loader() {
  const [visible, setVisible] = useState(true);
  const nodeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(0, 100, {
      duration: 1,

      onUpdate(value) {
        node.textContent = value.toFixed(0) + '%';
      },
    });
    setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => controls.stop();
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden opacity-100 transition-all duration-400',
        !visible && '-z-10 opacity-0',
      )}>
      <p className="relative z-[99999] text-7xl text-white" ref={nodeRef} />

      <div className="absolute top-0 h-full w-full rounded-xl bg-black">
        <Image
          className="z-0 h-full max-h-[32.5rem] w-full object-cover"
          src="/background-secondary.svg"
          width={1920}
          quality={100}
          height={1080}
          alt="bg"
        />
      </div>
    </div>
  );
}
