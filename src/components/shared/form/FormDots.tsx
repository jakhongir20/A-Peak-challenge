import { cn } from '@/lib/utils';
import React from 'react';
interface Props {
  className?: string;
  step: number;
  onClick: () => void;
}

export const FormDots: React.FC<Props> = ({ className, step, onClick }) => {
  return (
    <div className={cn('flex justify-between w-9 mx-auto mt-5', className)}>
      <span
        className={cn(
          'w-[10px] h-[10px] rounded-full transition-all cursor-pointer',
          step === 1 ? 'bg-[#7F56D9]' : 'bg-[#E4E7EC]'
        )}
        onClick={() => step !== 1 && onClick()}
      ></span>
      <span
        className={cn(
          'w-[10px] h-[10px] rounded-full transition-all cursor-pointer',
          step === 2 ? 'bg-[#7F56D9]' : 'bg-[#E4E7EC]'
        )}
        onClick={() => step !== 2 && onClick()}
      ></span>
    </div>
  );
};
