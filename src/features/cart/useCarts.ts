import { useGetSearchParams } from '@/hooks';
import { Cart } from '@/services';
import { useQuery } from '@tanstack/react-query';

export type CartListParamsType = {
  limit: number;
  offset: number;
  name?: string;
  q?: string;
};

export function useCarts({ ...params }: CartListParamsType, enabled: boolean) {
  const { limit, offset, q } = useGetSearchParams();
  console.log(limit, offset, q);

  const {
    data: carts,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['carts', params],
    queryFn: () => Cart.getCarts({ ...params }),
    enabled,
  });
  return { carts, isLoading, error };
}
