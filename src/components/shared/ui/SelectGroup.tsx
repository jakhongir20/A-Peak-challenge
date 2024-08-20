import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { SelectOption } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { ChangeEventHandler } from 'react';

interface Props {
  className?: string;
  name: string;
  horizontal?: boolean;
  labelText: string;
  showLabel?: boolean; // by default is true
  placeholder?: string;
  style?: object;
  position?: 'popper';
  value: SelectOption['value'];
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
            'font-medium text-sm text-[#344054]'
          )}
        >
          {labelText}
        </Label>
      )}
      <Select aria-labelledby={name} aria-describedby={`${name}-description`}>
        <SelectTrigger
          style={{ ...style }}
          id={name}
          className={cn(
            'h-11 text-base text-[#101828] placeholder:text-[#667085] placeholder:text-base placeholder:font-normal',
            className
          )}
        >
          <SelectValue
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </SelectTrigger>
        <SelectContent position={position}>
          {options.length > 0 ? (
            options.map((option: SelectOption) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))
          ) : (
            <div role="alert">No data available</div>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
