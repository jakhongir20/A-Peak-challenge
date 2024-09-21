import { Cart } from '@/services';
import { useQuery } from '@tanstack/react-query';

export function useCart(cartId: string) {
  const {
    data: cart,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['cart', cartId],
    queryFn: () => Cart.getCart(cartId),
  });
  return { cart, isLoading, error };
}
