import { DEFAULT_LIMIT } from '@/lib/constants';
import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [searchParams] = useSearchParams();

  // * COMMON SEARCH PARAMS
  const limit = !searchParams.get('limit')
    ? DEFAULT_LIMIT
    : Number(searchParams.get('limit'));

  const offset = !searchParams.get('offset')
    ? 1
    : Number(searchParams.get('offset'));

  const q = searchParams.get('q') || '';
  let status = searchParams.get('status') || '';

  const sources = searchParams.getAll('source');
  const user = searchParams.getAll('user').map(Number);

  // * SUB-FILTER SEARCH PARAMS
  // something...

  if (q) {
    status = '';
  }

  return {
    limit,
    offset,
    q,
    status,
    sources,
    user,
  };
};
