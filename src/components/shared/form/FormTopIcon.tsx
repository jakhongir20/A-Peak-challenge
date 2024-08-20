import { cn } from '@/lib/utils';
import React from 'react';
import { Toggle } from '../ui';

interface Props {
  className?: string;
}

export const FormTopIcon: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          'absolute left-0 top-0 items-center justify-center rounded-full z-0 hidden sm:flex',
          className
        )}
      >
        <div className="absolute w-72 h-72 opacity-30 rounded-full border border-[#E4E7EC]"></div>
        <div className="absolute w-60 h-60 opacity-35 rounded-full border border-[#E4E7EC]"></div>
        <div className="absolute w-48 h-48 opacity-45 rounded-full border border-[#E4E7EC]"></div>
        <div className="absolute w-36 h-36 opacity-60 rounded-full border border-[#E4E7EC]"></div>
        <div className="w-24 h-24 opacity-80  rounded-full border border-[#E4E7EC] "></div>
      </div>
      <Toggle
        className="w-12 h-12 hidden sm:flex items-center justify-center relative"
        variant="outline"
        aria-label="Toggle italic"
      >
        <i className="icon-flag text-2xl before:text-[#344054]"></i>
      </Toggle>
    </>
  );
};
