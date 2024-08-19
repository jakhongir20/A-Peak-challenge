/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { cn } from '../../../lib/utils';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';

interface Props {
  className?: string;
  name: string;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  prefixWithLine?: boolean;
  suffixWithLine?: boolean;
  horizontal?: boolean;
  labelText: string;
  showLabel?: boolean; // by default is true
  placeholder?: string;
  style?: object;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputGroup: React.FC<Props> = ({
  className,
  name,
  prefix,
  suffix,
  labelText,
  showLabel = true,
  placeholder,
  prefixWithLine = false,
  suffixWithLine = false,
  horizontal = false,
  style,
  onChange,
}) => {
  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  const [prefixWidth, setPrefixWidth] = useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);

  useEffect(() => {
    if (prefixRef.current) {
      setPrefixWidth(prefixRef.current.offsetWidth);
    }
    if (suffixRef.current) {
      setSuffixWidth(suffixRef.current.offsetWidth);
    }

    console.log('prefixWidth', prefixWidth);
  }, [prefix, suffix]);

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
            'font-medium text-sm text-[#344054]'
          )}
        >
          {labelText}
        </Label>
      )}
      <div className="flex relative">
        <Input
          id={name}
          placeholder={placeholder}
          style={{
            paddingLeft: prefix
              ? `${prefixWidth + (prefixWithLine ? 14 : 0)}px`
              : '14px',
            paddingRight: suffix
              ? `${suffixWidth + (suffixWithLine ? 14 : 0)}px`
              : '14px',
            ...style,
          }}
          className={cn(
            horizontal ? '' : '',
            'h-11 text-base placeholder:text-[#667085] placeholder:text-base placeholder:font-normal',
            className
          )}
          onChange={onChange}
        />
        {prefix && (
          <span
            ref={prefixRef}
            className={cn(
              'flex items-center pl-[14px] pr-2 h-full text-[#475467] text-base absolute left-0 top-0 bottom-0',
              prefixWithLine ? 'border-r' : ''
            )}
          >
            {prefix}
          </span>
        )}
        {suffix && (
          <span
            ref={suffixRef}
            className={cn(
              'flex items-center pl-[14px] pr-3 h-full text-gray-500 absolute right-0 top-0 bottom-0',
              suffixWithLine ? 'border-l' : ''
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};
