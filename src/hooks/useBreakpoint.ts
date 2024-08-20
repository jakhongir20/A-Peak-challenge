import { BREAKPOINTS } from '@/lib/constants';
import { createBreakpoint } from 'react-use';

export const useBreakpoint = createBreakpoint(BREAKPOINTS);
