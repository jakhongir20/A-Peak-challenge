import { CartListParamsType } from '@/features/cart/useCarts';
import { BaseClass } from './index';

class Cart extends BaseClass {
  constructor() {
    super();
  }

  // GET: /cart/list/
  async getCarts({ ...params }: CartListParamsType) {
    try {
      return (await this.$api.get('/cart/list/', { params })).data;
    } catch (error) {
      this.throwError(error);
    }
  }

  // GET: /cart/:id/
  async getCart(cartId: string) {
    try {
      return (await this.$api.get(`/cart/${cartId}/`)).data;
    } catch (error) {
      this.throwError(error);
    }
  }

  // PUT: /cart/update/:id/
  async updateCart(cartId: string) {
    try {
      return (await this.$api.put(`/cart/update/${cartId}/`)).data;
    } catch (error) {
      this.throwError(error);
    }
  }
}

export default new Cart();
