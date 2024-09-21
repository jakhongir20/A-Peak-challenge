import { CartListParamsType } from '@/features/cart/useCarts';
import { BaseClass } from './index';

export class Product extends BaseClass {
  constructor() {
    super();
  }

  // GET: /product/list/
  async getProducts({ ...params }: CartListParamsType) {
    try {
      return (await this.$api.get('/product/list/', { params })).data;
    } catch (error) {
      this.throwError(error);
    }
  }
}

export default new Product();
