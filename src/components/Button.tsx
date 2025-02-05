import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Button = (
  props: HTMLAttributes<HTMLButtonElement> & { icon?: boolean },
) => {
  const { children, className, icon, ...data } = props;
  return (
    <button
      className={cn(
        'cursor-pointer bg-white transition duration-200 hover:bg-[#CCA1E0]',
        icon
          ? 'flex size-[1.5rem] items-center justify-center rounded-full'
          : 'rounded-[0.5rem]',
        className,
      )}
      {...data}>
      {props.children}
    </button>
  );
};
