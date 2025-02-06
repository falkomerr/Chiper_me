'use client';
import { useEffect, useRef } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="relative z-50 mx-auto mb-[3.4375rem] max-w-[55.125rem] py-[3.5rem] text-center text-[3rem] leading-[3rem] font-normal whitespace-break-spaces text-white"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}>
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="relative z-[999] mx-auto mb-[3.4375rem] max-w-[55.125rem] py-[3.5rem] text-center text-[3rem] leading-[3rem] whitespace-break-spaces text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
