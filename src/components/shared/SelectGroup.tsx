/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler } from 'react';
import { cn } from '../../lib/utils';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type SelectOption = {
  value: string;
  label: string;
};

interface Props {
  className?: string;
  name: string;
  horizontal?: boolean;
  labelText: string;
  showLabel?: boolean; // by default is true
  placeholder?: string;
  style?: object;
  position?: 'popper';
  options: SelectOption[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectGroup: React.FC<Props> = ({
  className,
  name,
  labelText,
  showLabel = true,
  placeholder,
  horizontal = false,
  style,
  position = 'popper',
  options = [],
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
        <Label htmlFor={name} className={cn(horizontal ? 'mt-1' : '')}>
          {labelText}
        </Label>
      )}
      <Select>
        <SelectTrigger style={{ ...style }} id={name}>
          <SelectValue
            placeholder={placeholder}
            className={className}
            onChange={onChange}
          />
        </SelectTrigger>
        <SelectContent position={position}>
          {options.length > 0
            ? options.map((option: SelectOption) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))
            : 'No data'}
        </SelectContent>
      </Select>
    </div>
  );
};
