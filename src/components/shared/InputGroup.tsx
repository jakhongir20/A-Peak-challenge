/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

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
        'flex',
        horizontal ? 'justify-between w-full' : 'flex-col ',
        className
      )}
    >
      {showLabel && (
        <Label htmlFor={name} className={cn(horizontal ? 'mt-1' : '')}>
          {labelText}
        </Label>
      )}
      <div className="flex relative">
        <Input
          id={name}
          placeholder={placeholder}
          style={{
            paddingLeft: prefix
              ? `${prefixWidth + (prefixWithLine ? 10 : 0)}px`
              : '10px',
            paddingRight: suffix
              ? `${suffixWidth + (suffixWithLine ? 10 : 0)}px`
              : '10px',
            ...style,
          }}
          className={cn(horizontal ? 'ml-3' : '', className)}
          onChange={onChange}
        />
        {prefix && (
          <span
            ref={prefixRef}
            className={cn(
              'flex items-center px-3 h-full text-gray-500 space-x-2 absolute left-0 top-0 bottom-0',
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
              'flex items-center px-3 h-full text-gray-500 space-x-2 absolute right-0 top-0 bottom-0',
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
