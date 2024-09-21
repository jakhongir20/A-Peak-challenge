import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const CartItem: React.FC<Props> = ({ className }) => {
  return <div className={cn(className)}>{/* YOUR CONTENT HERE */}</div>;
};
