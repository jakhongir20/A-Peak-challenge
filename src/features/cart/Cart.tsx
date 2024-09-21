import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Cart: React.FC<Props> = ({ className }) => {
  const item = 10;

  return (
    <div
      className={cn(
        'px-4 py-3',
        item === 10 ? 'some-class' : 'another-class',
        className
      )}
    >
      {/* YOUR CONTENT HERE */}
    </div>
  );
};
