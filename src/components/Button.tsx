import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Button = (
  props: HTMLAttributes<HTMLButtonElement> & { icon?: boolean },
) => {
  const { children, className, icon, ...data } = props;
  return (
    <button
      className={cn(
        'bg-white',
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
