import React, { ChangeEventHandler } from 'react';
import { cn } from '../../../lib/utils';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../ui/tooltip';

interface Props {
  className?: string;
  name: string;
  horizontal?: boolean;
  labelText: string;
  showLabel?: boolean; // by default is true
  placeholder?: string;
  style?: object;
  value?: string;
  labelTooltipText?: string;
  labelTooltipIcon?: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextareaGroup: React.FC<Props> = ({
  className,
  name,
  labelText,
  showLabel = true,
  placeholder,
  horizontal = false,
  labelTooltipText = '',
  labelTooltipIcon,
  style,
  value,
  onChange,
}) => {
  return (
    <div
      className={cn(
        horizontal ? 'justify-between w-full' : 'flex-col',
        'flex space-y-1.5'
      )}
    >
      {showLabel && (
        <Label
          htmlFor={name}
          className={cn(
            horizontal ? 'mt-1' : '',
            'flex items-center font-medium text-sm text-[#344054]'
          )}
        >
          {labelText}
          {labelTooltipIcon && labelTooltipText && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger onClick={(e) => e.preventDefault()}>
                  {labelTooltipIcon}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{labelTooltipText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </Label>
      )}
      <Textarea
        placeholder={placeholder}
        id={name}
        style={{ ...style, height: 118 }}
        value={value}
        className={cn(
          'h-11 text-base text-[#101828] placeholder:text-[#667085] placeholder:text-base placeholder:font-normal',
          className
        )}
        onChange={onChange}
      />
    </div>
  );
};
