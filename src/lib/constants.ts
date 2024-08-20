export const BREAKPOINTS = { XL: 1280, L: 768, S: 640, XS: 480 } as const;

export type SelectOption = {
  value: string;
  label: string;
};

export const WORK_TIME_SCHEDULE: SelectOption[] = [
  {
    value: 'full-time',
    label: 'Full time',
  },
  {
    value: 'part-time',
    label: 'Part time',
  },
  {
    value: 'remote',
    label: 'Remote',
  },
];
