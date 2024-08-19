import React from 'react';
import { cn } from '../../../lib/utils';
import { Button as ButtonUI } from '../../ui';

interface Props {
  className?: string;
}

export const Button: React.FC<Props> = ({ className }) => {
  return <ButtonUI variant="ghost" className={cn(className)}></ButtonUI>;
};
